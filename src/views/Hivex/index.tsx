import React from 'react';
import Zoom from 'react-medium-image-zoom';

import { Button, Hives, NextImage } from '@/components';

import exclamationSvg from '~/images/bts-factory/exclamation.png';
import HivexBack from '~/images/hivex.png';
import beeSvg from '~/images/hivex/bee.png';

export default function Hivex() {
  return (
    <main className="flex flex-col gap-28 bg-[#10122A] pb-20 font-poppins text-white">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
            Hivex
          </h1>
          <h1 className=" text-center text-xl font-light">
            Trade BTS LP tokens and earn fees by contributing liquidity.
          </h1>
        </div>
      </Hives>
      <div className="bg-[#0D0F23]text-left  container mx-auto flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 md:flex-row">
        <div className="grid gap-[26px] p-10  md:py-[49px] md:pl-10">
          <h1 className=" text-xl font-medium">Add LP to any BTS</h1>
          <p className="text-sm font-normal opacity-80">
            Our platform offers a unique opportunity for users to invest in BTS
            tokens and receive BTS LP tokens in return, representing their stake
            in the BTS.
            <br />
            <br /> These tokens can then be committed to the HiveX liquidity
            pool. This can be done individually or paired with another asset
            such as ETH, USDT, AVAX, or BNB. In exchange, users are granted
            HiveX LP tokens, signifying their stake in the pool. As liquidity
            providers, users will share 30% of all transaction fees, distributed
            based on the proportion of their LP holdings.
          </p>
        </div>
        <NextImage width={200} height={400} src={beeSvg} alt="bee" />
      </div>
      <div className=" hidden items-center justify-center md:grid">
        <Zoom>
          <NextImage
            src={HivexBack}
            width={833}
            height={478}
            alt="hivex-back"
          />
        </Zoom>
      </div>
      <div className="block h-[1513px] w-full bg-[url('/images/hivex/mobile-back.svg')] bg-cover bg-clip-padding bg-center bg-no-repeat bg-origin-padding px-6 md:hidden">
        <div className=" group relative mt-[565px] flex h-8 w-full place-content-center   bg-center bg-no-repeat ">
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
