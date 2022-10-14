import React from 'react';

import { Button, NextImage } from '@/components';

import Currencies from './Currencies';

import hives from '~/images/hives-2.png';

export default function Hivex() {
  return (
    <section className="relative mx-auto flex flex-row items-center bg-gray-400 py-[90px]">
      <Currencies className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full " />
      <div className="w-1/2">
        <NextImage
          className="m-auto"
          width={335}
          height={490}
          src={hives}
          alt="top-right-hives"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-8 px-10">
        <h2>HiveX</h2>
        <div className="h-[4px] w-1/2 bg-gradient-to-r from-purple-650 to-transparent"></div>
        <p>
          Alvara&apos;s HiveX is a hybrid exchange (HEX), utilizing both
          blockchain and off-chain technology to deliver a blazingly fast and
          secure trading experience. Powered by Finex&apos;s Go matching engine,
          HiveX can process over 500,000 transactions per second.
        </p>
        <Button variant="outline" className="max-w-max py-4 uppercase">
          join the hive
        </Button>
      </div>
    </section>
  );
}
