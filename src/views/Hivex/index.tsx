import React from 'react';

import { Hives } from '@/components';

export default function Hivex() {
  return (
    <main className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
            Hivex
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
        In our platform users can add capital to a ERC-BTS and receive ERC-BTS
        LP tokens, which represent their stake in the BTS.
        <br /> These tokens can be deposited into the HiveX liquidity pool,
        either on their own or with a paired asset, such as eth/usdt/avax/bnb,
        and in return, users receive HiveX LP tokens representing their share in
        the pool.
        <br /> As a liquidity provider, users will receive 30% of transaction
        fees, distributed proportionately based on their LP holdings.
      </div>
      <div className="hidden h-[1085px] w-full bg-[url('/images/hivex/back.svg')] bg-cover bg-center bg-no-repeat md:block"></div>
      <div className="block h-[1800px] w-full bg-[url('/images/hivex/mobile-back.svg')] bg-cover bg-center bg-no-repeat md:hidden"></div>
    </main>
  );
}
