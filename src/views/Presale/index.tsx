import React, { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  chain,
  useAccount,
  useConnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';

import logger from '@/lib/logger';
import { metaMaskConnector } from '@/lib/web3/wagmi';

import {
  Button,
  InputGroup,
  NextImage,
  RangeWithEthereum,
  Select,
} from '@/components';

import Links from '@/views/News/Links';

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  poundsActivated: boolean;
  pounds: number;
  dollarsActivated: boolean;
  dollars: number;
  eurosActivated: boolean;
  euros: number;
}

export default function Presale() {
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { chain: activeChain } = useNetwork();
  const { isLoading: isSwitchingNetwork, switchNetworkAsync } =
    useSwitchNetwork();

  const { register, handleSubmit, control } = useForm<FormProps>({
    defaultValues: {
      poundsActivated: true,
      dollarsActivated: false,
    },
  });
  const { poundsActivated, dollarsActivated, eurosActivated } = useWatch({
    control,
  });

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    logger(data, 'index.tsx line 15');
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

    if (activeChain.id !== chain.mainnet.id) {
      logger('switchNetworkAsync', 'index.tsx line 80');
      switchNetworkAsync(chain.mainnet.id).catch((error) => {
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
            />
          </div>
          <div className="border-gradient3 flex w-full flex-col items-center gap-4 border-y py-10 ">
            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Pounds"
                {...register('poundsActivated')}
              />
              <RangeWithEthereum
                min={0}
                max={10000}
                rate={500}
                disabled={!poundsActivated}
                {...register('pounds', { min: 0, max: 400000 })}
              />
            </div>

            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Dollars"
                {...register('dollarsActivated')}
              />
              <RangeWithEthereum
                min={0}
                max={10000}
                rate={500}
                disabled={!dollarsActivated}
                {...register('dollars', { min: 0, max: 400000 })}
              />
            </div>

            <div className="w-full">
              <Select
                containerClassName="items-start"
                label="Euros"
                {...register('eurosActivated')}
              />
              <RangeWithEthereum
                min={0}
                max={10000}
                rate={500}
                disabled={!eurosActivated}
                {...register('euros', { min: 0, max: 400000 })}
              />
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-center text-2xl font-medium">Total ETH</h4>
            <div className="border-gradient w-full border p-3 text-center">
              4234 ETH
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

      <div className="container mx-auto grid grid-cols-4 items-center justify-center p-20">
        <Links visible={true} />
      </div>
    </main>
  );
}
