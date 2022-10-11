import React from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';

import logger from '@/lib/logger';

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
          <Button type="button" onClick={() => handleSubmit(onSubmit)}>
            Connect Wallet
          </Button>
        </form>
      </section>

      <div className="container mx-auto grid grid-cols-4 items-center justify-center p-20">
        <Links visible={true} />
      </div>
    </main>
  );
}
