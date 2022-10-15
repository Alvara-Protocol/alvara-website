import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import { getMessageFromCode, serializeError } from 'eth-rpc-errors';
import { BigNumberish } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import Joi from 'joi';
import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  useAccount,
  useBalance,
  useConnect,
  useNetwork,
  useQuery,
  useSwitchNetwork,
} from 'wagmi';

import clsxm from '@/lib/clsxm';
import { metaMaskConnector } from '@/lib/web3/wagmi';
import { usePresaleContract, useSsr } from '@/hooks';

import {
  Button,
  NextImage,
  RangeWithEthereum,
  Select,
  Seo,
} from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import { CHAIN_ID, tokenPricesInUsd } from '@/config';
import { fetchETHPrice } from '@/service';
import Links from '@/views/News/Links';

import Subscribe from './Subscribe';

// TODO: Update FormProps support Option array
export interface Option {
  name: string;
  tokenPrice: number;
  minVestAmountInUsd: number;
  maxVestAmountInUsd: number;
}
export interface FormProps {
  optionAActivated: boolean;
  optionA: number;
  optionBActivated: boolean;
  optionB: number;
  optionCActivated: boolean;
  optionC: number;
}

export const joiSchema = Joi.object<FormProps>({
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

function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node: any = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [], // Recall only if ref changes
  );
  return [ref, value];
}

export default function Presale() {
  const [hoverRef1, isHovered1] = useHover<HTMLDivElement>();
  const [hoverRef2, isHovered2] = useHover<HTMLDivElement>();
  const [hoverRef3, isHovered3] = useHover<HTMLDivElement>();
  const { isConnected, address } = useAccount();
  const { connectAsync } = useConnect();
  const { chain: activeChain } = useNetwork();
  const { isLoading: isSwitchingNetwork, switchNetworkAsync } =
    useSwitchNetwork();
  const { data: balanceResult } = useBalance({ addressOrName: address });
  const { isBrowser } = useSsr();

  const { addVest } = usePresaleContract();

  const { register, handleSubmit, control } = useForm<FormProps>({
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

  const insufficientBalance = useMemo(() => {
    if (!balanceResult) return false;
    const { value } = balanceResult;

    return value.lt(parseEther(totalETH.toFixed(2)));
  }, [totalETH, balanceResult]);

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    try {
      if (!address || !ethPrice) return;
      if (insufficientBalance) {
        return toast.error('Insufficient Balance.');
      }
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
      <Seo
        templateTitle="Presale"
        description="ALVA is the utility token that powers the Alvara Protocol."
      />
      <section className="px-[50px] pt-[120px] text-black lg:bg-primary lg:pb-[50px] lg:text-white">
        <NextImage
          className="absolute top-0 left-56 hidden lg:block"
          alt="Nest"
          src="/images/presale/top-back.png"
          width="550"
          height="215"
        />
        <div className="grid grid-cols-10 gap-6">
          <div className="col-span-10 flex flex-col gap-7 lg:col-span-4">
            <p className="mb-8 text-[32px] font-medium uppercase leading-[40px] tracking-widest lg:text-[38px]">
              ALVA Presale.
            </p>
            <p className="text-[14px] font-medium leading-[20px]">
              ALVA is the utility token that powers the Alvara Protocol. From
              fee reductions to inclusion in every ETF,{' '}
              <span className="text-fuchsia-450">
                ALVA is the Honey OF the Hive.
              </span>
              <br />
              <br />
              TGE scheduled for Q2 2023.
              <br />
              <br />
              ALVA tokens will be claimable via this page, in accordance with
              the vesting schedules.
            </p>

            <p className="text-[20px] font-medium tracking-widest text-fuchsia-450">
              LISTING PRICE $0.15
            </p>
            <UnstyledLink
              className="uppercase underline"
              href="/docs/tokenomics.pdf"
              openNewTab
            >
              Tokenomics
            </UnstyledLink>
            <UnstyledLink
              className="uppercase underline"
              href="/docs/token_utility.pdf"
              openNewTab
            >
              Token Utility
            </UnstyledLink>
          </div>
          <div className="col-span-10 mt-12 lg:col-span-6 lg:mt-0">
            <div className="mb-6 grid justify-center gap-6 lg:grid-cols-3 lg:justify-start">
              <div
                className="relative h-fit min-w-[200px] max-w-[200px] cursor-pointer"
                ref={hoverRef1}
              >
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                  Option 1
                </span>
                <NextImage
                  src="/images/presale/option.png"
                  alt="Tokenomics"
                  width={323}
                  height={280}
                  className="w-full"
                />
              </div>
              <div
                className="relative h-fit min-w-[200px] max-w-[200px] cursor-pointer"
                ref={hoverRef2}
              >
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                  Option 2
                </span>
                <NextImage
                  src="/images/presale/option.png"
                  alt="Tokenomics"
                  width={323}
                  height={280}
                  className="w-full"
                />
              </div>
              <div
                className="relative h-fit min-w-[200px] max-w-[200px] cursor-pointer"
                ref={hoverRef3}
              >
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                  Option 3
                </span>
                <NextImage
                  src="/images/presale/option.png"
                  alt="Tokenomics"
                  width={323}
                  height={280}
                  className="w-full"
                />
              </div>
            </div>
            <div className="min-h-[180px] lg:grid lg:grid-cols-3 lg:gap-6">
              <div className="relative mx-auto h-fit max-w-[200px] lg:mx-0">
                {isHovered1 && (
                  <>
                    <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                      <p className="mb-3 text-[16px] font-normal">$0.10</p>
                      <p className="font-poppins text-[12px] font-light">
                        No Lock <br />
                        100% of ALVA received <br /> on TGE
                      </p>
                    </div>
                    <NextImage
                      src="/images/presale/option-detail.png"
                      alt="Tokenomics"
                      width={323}
                      height={280}
                      className="w-full"
                    />
                  </>
                )}
              </div>
              <div className="relative mx-auto h-fit max-w-[200px] lg:mx-0">
                {isHovered2 && (
                  <>
                    <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                      <p className="mb-3 text-[16px] font-normal">$0.075</p>
                      <p className="font-poppins text-[12px] font-light">
                        6 month lock <br />
                        16.7%/month from <br /> month 1
                      </p>
                    </div>
                    <NextImage
                      src="/images/presale/option-detail.png"
                      alt="Tokenomics"
                      width={323}
                      height={280}
                      className="w-full"
                    />
                  </>
                )}
              </div>
              <div className="relative mx-auto h-fit max-w-[200px] lg:mx-0">
                {isHovered3 && (
                  <>
                    <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                      <p className="mb-3 text-[16px] font-normal">$0.05</p>
                      <p className="font-poppins text-[12px] font-light">
                        18 month lock <br />
                        5.56%/month from <br /> month 1
                      </p>
                    </div>
                    <NextImage
                      src="/images/presale/option-detail.png"
                      alt="Tokenomics"
                      width={323}
                      height={280}
                      className="w-full"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 w-3/4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-gradient3 flex w-full flex-col items-center gap-8 border-y pt-10 pb-4"
        >
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

          <div className="w-full text-center">
            <h4 className="text-center text-2xl font-medium">Total ETH</h4>
            <div
              className={clsxm(
                'border-gradient my-3 mx-auto w-2/3 border p-3 text-center',
                insufficientBalance && 'text-red-400',
              )}
            >
              {`${totalETH.toFixed(2)} ETH`}
            </div>
            {isBrowser && (
              <span>
                {balanceResult
                  ? `Balance: ${parseFloat(balanceResult.formatted).toFixed(
                      4,
                    )} ${balanceResult.symbol}`
                  : `Unable to fetch balance`}
              </span>
            )}
            {insufficientBalance && (
              <label className="ml-4 text-sm text-red-400">
                Insufficient balance
              </label>
            )}
          </div>
          <Button
            type={isConnected ? 'submit' : 'button'}
            onClick={isConnected ? handleSubmit(onSubmit) : handleConnectWallet}
          >
            {isConnected ? 'Join' : 'Connect Wallet'}
          </Button>
        </form>
        <Subscribe />
      </section>

      <div className="hidden">
        {isError ? 'Unable to fetch' : `${ethPrice} USD`}
      </div>

      <div className="container mx-auto grid grid-cols-1 items-center justify-center px-8 py-10 md:grid-cols-4 md:px-0 lg:py-10">
        <Links visible={true} />
      </div>
    </main>
  );
}
