import React from 'react';

import { Button, Hives, NextImage } from '@/components';
import ImageWithModal from '@/components/ImageWithModal';

import exclamationSvg from '~/images/bts-factory/exclamation.png';
import hiveXBack from '~/images/hivex.png';

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
        In our platform users can add capital to a ERC-BTS and receive ERC-BTS
        LP tokens, which represent their stake in the BTS. These tokens can be
        deposited into the HiveX liquidity pool, either on their own or with a
        paired asset, such as ETH/USDT/AVAX/BNB, and in return, users receive
        HiveX LP tokens representing their share in the pool. As a liquidity
        provider, users will receive 30% of transaction fees, distributed
        proportionately based on their LP holdings.
      </div>
      <div className=" hidden md:grid">
        {/* <Back /> */}
        <ImageWithModal src={hiveXBack} alt="hiv-x" width={1118} height={561} />
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
