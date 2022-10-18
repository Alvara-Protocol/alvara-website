import React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import hives from '~/images/hives-3.png';

export default function Intro2() {
  return (
    <div className="container mx-auto flex flex-col items-end p-5 md:flex-row md:p-20">
      <section className="flex flex-col gap-[48px] md:w-1/2 ">
        <span className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-transparent">
          ALVARA PROTOCOL
        </span>
        <h2 className="text-4xl font-medium uppercase tracking-wider">
          smart funds
        </h2>
        <div className="h-[2px] w-full bg-gradient-to-r from-purple-650 to-transparent"></div>
        <p className="w-4/5">
          Alvara SmartFunds. That&apos;s our name for Crypto ETFs - baskets of
          assets, owned by investors, with shares tradable on the HiveX. Each
          SmartFund has its own NFT counterpart. Held by the manager, the NFT is
          the key to the SmartFund - giving the holder the exclusive rights to
          fund management and rewards.
        </p>
        <UnstyledLink href="/smart-funds">
          <Button variant="outline" className="max-w-max py-4 uppercase">
            learn more
          </Button>
        </UnstyledLink>
      </section>
      <div className="hidden md:block md:w-1/2">
        <NextImage
          className="m-auto"
          width={370}
          height={430}
          src={hives}
          alt="top-right-hives"
        />
      </div>
    </div>
  );
}
