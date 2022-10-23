import { AlvrTokenSale__factory } from '@alvara/presale';
import { Wallet } from '@ethersproject/wallet';
import { BigNumber, utils } from 'ethers';
import { NextApiRequest, NextApiResponse } from 'next';
import { chain } from 'wagmi';

import { splitSignature } from '@/lib/web3/sign';
import { provider as wagmiProvider } from '@/lib/web3/wagmi';

import { contractAddress, tokenPricesInUsd } from '@/config';
import { ethPrice, updateEthBalance } from '@/pages/api/price';
import { joiSchema } from '@/views/Presale/PresaleForm';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  try {
    const chainId = parseInt(
      process.env.NEXT_PUBLIC_CHAIN_ID || chain.goerli.id.toString(),
    );

    const provider = wagmiProvider({ chainId });

    if (!provider) {
      return;
    }

    const masterWalletPrivateKey = process.env.MASTER_WALLET_PRIVATE_KEY;
    if (!masterWalletPrivateKey) {
      return;
    }

    const wallet = new Wallet(masterWalletPrivateKey);

    const alvrTokenSale = AlvrTokenSale__factory.connect(
      contractAddress[chainId],
      provider,
    );

    const { address } = req.query;
    const { error, value } = joiSchema.validate(req.body);

    if (error && !value) {
      return res.status(400).json({ error });
    }

    if (typeof address !== 'string') {
      return;
    }

    if (!utils.isAddress(address)) {
      return res.status(400).json({ error: 'Invalid address' });
    }

    const nonce = await alvrTokenSale.nonce(address);

    const ethAmounts = [
      value.optionA.toFixed(2),
      value.optionB.toFixed(2),
      value.optionC.toFixed(2),
    ].map(utils.parseEther);

    if (!ethPrice) {
      await updateEthBalance();
    }

    const tokenAmounts = ethAmounts.map((a, i) =>
      a
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .mul(utils.parseUnits(ethPrice!.toFixed(2), 2))
        .div(10 ** 2) // USD amount
        .div(tokenPricesInUsd[i] * 10 ** 3) // tokenPrices decimal is 3
        .mul(10 ** 3),
    );

    const vestAmount = ethAmounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );

    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [address, vestAmount, ethAmounts, tokenAmounts, nonce],
    );

    const signature = await wallet.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    res
      .status(200)
      .json({ signature, v, r, s, ethAmounts, tokenAmounts, vestAmount });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
