import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import { getMessageFromCode, serializeError } from 'eth-rpc-errors';
import { BigNumberish } from 'ethers';
import Joi from 'joi';
import React, { useCallback, useEffect, useMemo } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  useAccount,
  useConnect,
  useNetwork,
  useQuery,
  useSwitchNetwork,
} from 'wagmi';

import { metaMaskConnector } from '@/lib/web3/wagmi';
import { usePresaleContract } from '@/hooks';

import {
  Button,
  InputGroup,
  NextImage,
  RangeWithEthereum,
  Select,
} from '@/components';

import { CHAIN_ID, tokenPricesInUsd } from '@/config';
import { fetchETHPrice } from '@/service';
import Links from '@/views/News/Links';

// TODO: Update FormProps support Option array
export interface Option {
  name: string;
  tokenPrice: number;
  minVestAmountInUsd: number;
  maxVestAmountInUsd: number;
}
export interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  optionAActivated: boolean;
  optionA: number;
  optionBActivated: boolean;
  optionB: number;
  optionCActivated: boolean;
  optionC: number;
}

export const joiSchema = Joi.object<FormProps>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.email': 'Invalid Email address',
      'string.empty': 'Required',
    }),
  optionAActivated: Joi.boolean().required(),
  optionA: Joi.number(),
  optionBActivated: Joi.boolean().required(),
  optionB: Joi.number(),
  optionCActivated: Joi.boolean().required(),
  optionC: Joi.number(),
});

export interface SignatureResponse {
  signature: string;
  r: string;
  s: string;
  v: number;
  ethAmounts: BigNumberish[];
  tokenAmounts: BigNumberish[];
  vestAmount: BigNumberish;
}

export default function Presale() {
  const { isConnected, address } = useAccount();
  const { connectAsync } = useConnect();
  const { chain: activeChain } = useNetwork();
  const { isLoading: isSwitchingNetwork, switchNetworkAsync } =
    useSwitchNetwork();

  const { addVest } = usePresaleContract();

  const { register, handleSubmit, control, formState } = useForm<FormProps>({
    defaultValues: {
      optionAActivated: true,
      optionBActivated: false,
      optionCActivated: false,
      optionA: 500,
      optionB: 1000,
      optionC: 10000,
    },
    mode: 'onTouched',
    resolver: joiResolver(joiSchema),
  });
  const {
    optionAActivated,
    optionBActivated,
    optionCActivated,
    optionA,
    optionB,
    optionC,
  } = useWatch({
    control,
  });

  const { data: _ethPrice1, isError } = useQuery(['ethPrice'], fetchETHPrice, {
    refetchInterval: 2000,
  });
  const ethPrice = 1328.1;

  const totalETH = useMemo(() => {
    let total = 0;
    if (optionAActivated && optionA) total += optionA / ethPrice;
    if (optionBActivated && optionB) total += optionB / ethPrice;
    if (optionCActivated && optionC) total += optionC / ethPrice;
    return total;
  }, [
    optionA,
    optionAActivated,
    optionB,
    optionBActivated,
    optionC,
    optionCActivated,
  ]);

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    try {
      if (!address || !ethPrice) return;
      const {
        data: { ethAmounts, tokenAmounts, v, r, s, vestAmount },
      } = await axios.post<SignatureResponse>(`/api/signature/${address}`, {
        optionA: data.optionA / ethPrice,
        optionB: data.optionB / ethPrice,
        optionC: data.optionC / ethPrice,
      });

      // const transaction = await setUnclaimable();
      const transaction = await addVest(ethAmounts, tokenAmounts, v, r, s, {
        value: vestAmount,
      });

      toast.info(`Transaction Created : ${transaction.hash}`);

      await transaction.wait();

      toast.success(`Transaction Confirmed : ${transaction.hash}`);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.error);
      }
      const serializedError = serializeError(error);
      // TODO: Update detailed error message
      toast.error(getMessageFromCode(serializedError.code));
    }
  };

  const handleConnectWallet = useCallback(async () => {
    connectAsync({ connector: metaMaskConnector }).catch((error: any) => {
      if (error.code === -32002) {
        toast.info('Wallect connect request is pennding...');
      }
      if (error.name === 'ConnectorNotFoundError') {
        toast.info('Metamask not found');
      }
    });
  }, [connectAsync]);

  useEffect(() => {
    if (!isConnected || !activeChain || !switchNetworkAsync) return;

    if (activeChain.id !== CHAIN_ID) {
      switchNetworkAsync(CHAIN_ID).catch((error) => {
        if (error.code === 4001) {
          toast.error('Please change network to make transaction.');
        }
      });
    }
  }, [isConnected, activeChain, switchNetworkAsync]);

  useEffect(() => {
    if (isSwitchingNetwork) toast.info('Please switch network.');
  }, [isSwitchingNetwork]);

  return (
    <main>
      <section className="grid grid-cols-12 bg-primary px-4 py-6 text-white">
        <div className="col-start-1 col-end-5 flex flex-col justify-center gap-4">
          <h1 className="mb-4">ALVA Presale</h1>
          <p>
            ALVA is powering the World&apos;s Premier Digital Asset ETF
            Protocol.
          </p>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <span>Tokenomics</span>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <span>Token Utility</span>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
        </div>
        <div className="col-start-6 col-end-13 flex flex-wrap gap-4">
          <NextImage
            src="/images/presale/tokenomics.png"
            alt="Tokenomics"
            width={300}
            height={300}
          />
          <NextImage
            src="/images/presale/tokenomics.png"
            alt="Tokenomics"
            width={300}
            height={300}
          />
          <NextImage
            src="/images/presale/tokenomics.png"
            alt="Tokenomics"
            width={300}
            height={300}
          />
          <NextImage
            src="/images/presale/tokenomics.png"
            alt="Tokenomics"
            width={300}
            height={300}
          />
        </div>
      </section>

      <section className="container mx-auto my-4 w-3/4">
        <h2 className="text-center">Join Presale.</h2>
        <form
          className="flex flex-col items-center gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex w-full flex-col items-center gap-4 py-10">
            <InputGroup
              containerClassName="w-1/3"
              label="First Name"
              required
              {...register('firstName', { required: true })}
            />
            <InputGroup
              containerClassName="w-1/3"
              label="Last Name"
              required
              {...register('lastName')}
            />
            <InputGroup
              containerClassName="w-1/3"
              label="Email Address"
              required
              {...register('email')}
              error={formState.errors.email?.message}
            />
          </div>
          <div className="border-gradient3 flex w-full flex-col items-center gap-4 border-y py-10 ">
            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Option1"
                {...register('optionAActivated')}
              />
              <RangeWithEthereum
                min={500}
                max={10000}
                rate={ethPrice}
                tokenPriceInUsd={tokenPricesInUsd[0]}
                disabled={!optionAActivated}
                {...register('optionA', { min: 0, max: 400000 })}
              />
            </div>

            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Option2"
                {...register('optionBActivated')}
              />
              <RangeWithEthereum
                min={1000}
                max={50000}
                rate={ethPrice}
                tokenPriceInUsd={tokenPricesInUsd[1]}
                disabled={!optionBActivated}
                {...register('optionB', { min: 0, max: 400000 })}
              />
            </div>

            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Option3"
                {...register('optionCActivated')}
              />
              <RangeWithEthereum
                min={10000}
                max={100000}
                rate={ethPrice}
                tokenPriceInUsd={tokenPricesInUsd[2]}
                disabled={!optionCActivated}
                {...register('optionC', { min: 0, max: 400000 })}
              />
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-center text-2xl font-medium">Total ETH</h4>
            <div className="border-gradient w-full border p-3 text-center">
              {`${totalETH.toFixed(2)} ETH`}
            </div>
          </div>
          <Button
            type={isConnected ? 'submit' : 'button'}
            onClick={isConnected ? handleSubmit(onSubmit) : handleConnectWallet}
          >
            {isConnected ? 'Join' : 'Connect Wallet'}
          </Button>
        </form>
      </section>

      <div>{isError ? 'Unable to fetch' : `${ethPrice} USD`}</div>
      <div className="container mx-auto grid grid-cols-1 items-center justify-center py-14 md:grid-cols-4 lg:p-20">
        <Links visible={true} />
      </div>
    </main>
  );
}
