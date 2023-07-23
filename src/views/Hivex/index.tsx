import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import Back from '@/views/Hivex/Back';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function Hivex() {
  return (
    <main className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
            Hivex
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
        Our platform offers a unique opportunity for users to invest in BTS
        tokens and receive BTS LP tokens in return, representing their stake in
        the BTS. These tokens can then be committed to the HiveX liquidity pool.
        This can be done individually or paired with another asset such as ETH,
        USDT, AVAX, or BNB. In exchange, users are granted HiveX LP tokens,
        signifying their stake in the pool. As liquidity providers, users will
        share 30% of all transaction fees, distributed based on the proportion
        of
      </div>
      <div className=" hidden md:grid">
        <Back />
      </div>
      <div className="block h-[1800px] w-full bg-[url('/images/hivex/mobile-back.svg')] bg-cover bg-center bg-no-repeat md:hidden">
        <div className=" group relative mt-[680px] flex h-8 w-full place-content-center   bg-center bg-no-repeat ">
          <Button className=" place-self-center bg-none px-0">
            <NextImage
              className="m-auto "
              width={30}
              height={30}
              src={exclamationSvg}
              alt="exclamation"
            />
          </Button>
          <span
            className="absolute left-1/2 my-4 hidden w-60  -translate-x-1/2 translate-y-10 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
          >
            User deposits LP token paired with{' '}
            <a className="text-fuchsia-450">eth/usdt/avax/bnb</a> into HiveX DEX
          </span>
        </div>
      </div>
    </main>
  );
}
