import { AlvrTokenSale__factory } from '@alvara/presale';
import { Wallet } from '@ethersproject/wallet';
import { NextApiRequest, NextApiResponse } from 'next';
import { chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

import { signMessage } from '@/lib/web3/sign';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const provider = publicProvider()(chain.goerli)?.provider();

  const masterWalletPrivateKey = process.env.MASTER_WALLET_PRIVATE_KEY;
  if (!masterWalletPrivateKey) {
    return;
  }

  const wallet = new Wallet(masterWalletPrivateKey);

  if (!provider) {
    return;
  }
  wallet.connect(provider);
  const presaleContract = AlvrTokenSale__factory.connect('0x00', wallet);

  const { address, ethAmount } = req.query;

  if (typeof address !== 'string') {
    return;
  }

  const nonce = await presaleContract.nonce(address);
  const message = `${address} ${ethAmount} ${nonce.toString()}`;

  const signature = await signMessage(message, masterWalletPrivateKey);

  res.status(200).json({ signature });
}
