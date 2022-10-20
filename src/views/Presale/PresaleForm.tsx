import { joiResolver } from '@hookform/resolvers/joi';
import axios from 'axios';
import { serializeError } from 'eth-rpc-errors';
import { BigNumberish } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import Joi from 'joi';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { usePresaleContract } from '@/hooks';

import { Button, RangeWithEthereum, Select } from '@/components';

import { CHAIN_ID, tokenPricesInUsd } from '@/config';
import { fetchETHPriceFromBackend } from '@/service';

import SuccessModal from './SuccessModal';

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

export default function PresaleForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addVest } = usePresaleContract();
  const { isConnected, address } = useAccount();
  const { connectAsync } = useConnect();
  const { chain: activeChain } = useNetwork();
  const { isLoading: isSwitchingNetwork, switchNetworkAsync } =
    useSwitchNetwork();
  const { data: balanceResult, refetch: refetchBalance } = useBalance({
    addressOrName: address,
  });

  const {
    data: ethPrice,
    isLoading: isFetchingEthPrice,
    isError: isEthPriceError,
  } = useQuery(['ethPrice'], fetchETHPriceFromBackend, {
    refetchInterval: 60000,
  });

  const { register, handleSubmit, setValue, control } = useForm<FormProps>({
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

  const totalETH = useMemo(() => {
    let total = 0;
    if (!ethPrice) return;
    if (optionAActivated && optionA) total += optionA / ethPrice;
    if (optionBActivated && optionB) total += optionB / ethPrice;
    if (optionCActivated && optionC) total += optionC / ethPrice;
    return total;
  }, [
    ethPrice,
    optionA,
    optionAActivated,
    optionB,
    optionBActivated,
    optionC,
    optionCActivated,
  ]);

  const insufficientBalance = useMemo(() => {
    if (!balanceResult || !totalETH) return false;
    const { value } = balanceResult;

    return value.lt(parseEther(totalETH.toFixed(2)));
  }, [totalETH, balanceResult]);

  const onSubmit: SubmitHandler<FormProps> = useCallback(
    async (data) => {
      try {
        if (!address || !ethPrice) {
          throw Error('Connect wallet');
        }
        if (insufficientBalance) {
          throw Error('Insufficient Balance.');
        }

        setLoading(true);
        const {
          data: { ethAmounts, tokenAmounts, v, r, s, vestAmount },
        } = await axios.post<SignatureResponse>(`/api/signature/${address}`, {
          optionA: optionAActivated ? data.optionA / ethPrice : 0,
          optionB: optionBActivated ? data.optionB / ethPrice : 0,
          optionC: optionCActivated ? data.optionC / ethPrice : 0,
        });

        const transaction = await addVest(ethAmounts, tokenAmounts, v, r, s, {
          value: vestAmount,
        });

        await transaction.wait();

        refetchBalance();
        setShowSuccessModal(true);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          throw Error(error.response?.data.error);
        }
        let serializedError: any = serializeError(error);

        const originalError = (serializedError.data as any)?.originalError;

        if (originalError) serializedError = originalError;
        throw Error(
          serializedError.reason ? serializedError.reason : serializedError,
        );
      } finally {
        setLoading(false);
      }
    },
    [
      addVest,
      address,
      ethPrice,
      insufficientBalance,
      optionAActivated,
      optionBActivated,
      optionCActivated,
      refetchBalance,
    ],
  );

  const handleAddVest: React.FormEventHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await toast.promise(
          handleSubmit(onSubmit),
          {
            pending: 'Confirming transaction',
            success: 'Transaction Successful',
            error: {
              render({ data }) {
                return data.message;
              },
            },
          },
          { position: 'bottom-right' },
        );
      } catch (error) {
        //TODO
      }
    },

    [handleSubmit, onSubmit],
  );

  const handleConnectWallet = useCallback(async () => {
    connectAsync({ connector: metaMaskConnector })
      .then(() => refetchBalance())
      .catch((error: any) => {
        if (error.code === -32002) {
          toast.info('Wallect connect request is pennding...');
        }
        if (error.name === 'ConnectorNotFoundError') {
          toast.info('Metamask not found');
        }
      });
  }, [connectAsync, refetchBalance]);

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

  const globalDisabled = isFetchingEthPrice || isEthPriceError;

  return (
    <>
      {showSuccessModal ? (
        <SuccessModal />
      ) : (
        <form
          onSubmit={handleAddVest}
          className="border-gradient3 relative flex w-full flex-col items-center gap-8 border-y pt-10 pb-4"
        >
          <div
            className={clsxm(
              'absolute h-full w-full bg-black bg-opacity-30',
              isFetchingEthPrice || isEthPriceError ? '' : 'hidden',
            )}
          >
            {isFetchingEthPrice ? 'Loading...' : ''}
          </div>
          <div className="w-full">
            <Select
              containerClassName="items-start"
              label="Option 1"
              {...register('optionAActivated')}
            />
            <RangeWithEthereum
              min={500}
              max={10000}
              rate={ethPrice}
              tokenPriceInUsd={tokenPricesInUsd[0]}
              disabled={!optionAActivated || globalDisabled}
              currentValue={optionA || 500}
              setValue={(v: number) => {
                setValue('optionA', v);
              }}
              {...register('optionA', { min: 0, max: 400000 })}
            />
          </div>

          <div className="w-full">
            <Select
              containerClassName="items-start"
              label="Option 2"
              {...register('optionBActivated')}
            />
            <RangeWithEthereum
              min={1000}
              max={50000}
              rate={ethPrice}
              tokenPriceInUsd={tokenPricesInUsd[1]}
              disabled={!optionBActivated || globalDisabled}
              currentValue={optionB || 1000}
              setValue={(v: number) => {
                setValue('optionB', v);
              }}
              {...register('optionB', { min: 0, max: 400000 })}
            />
          </div>

          <div className="w-full">
            <Select
              containerClassName="items-start"
              label="Option 3"
              {...register('optionCActivated')}
            />
            <RangeWithEthereum
              min={10000}
              max={100000}
              rate={ethPrice}
              tokenPriceInUsd={tokenPricesInUsd[2]}
              disabled={!optionCActivated || globalDisabled}
              currentValue={optionC || 10000}
              setValue={(v: number) => {
                setValue('optionC', v);
              }}
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
              {totalETH ? `${totalETH.toFixed(2)} ETH` : `-`}
            </div>
            {isConnected && (
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
            onClick={isConnected ? handleAddVest : handleConnectWallet}
            disabled={globalDisabled || loading}
          >
            {isConnected
              ? loading
                ? 'Please wait...'
                : 'Join'
              : 'Connect Wallet'}
          </Button>
        </form>
      )}
    </>
  );
}
