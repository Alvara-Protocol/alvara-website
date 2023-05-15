import React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Currencies from './Currencies';

import hives from '~/images/hives-2.png';

export default function Hivex() {
  return (
    <section className="relative mx-auto flex flex-col-reverse items-center gap-4   bg-gradient-to-r from-[#10122A] to-[#3F1960]  py-[90px] md:flex-row">
      <Currencies className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-full " />
      <div className="md:w-1/2">
        <NextImage
          className="m-auto "
          width={335}
          height={490}
          src={hives}
          alt="top-right-hives"
        />
      </div>
      <div className="flex flex-col gap-8 px-10 text-gray-400 md:mr-32 md:w-1/2">
        <h2 className="text-4xl">BTS FACTORY</h2>
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-purple-650 to-transparent"></div>
        <p>
          The established requirements normally associated with traditional fund
          management are no longer applicable.
          <br />
          <br />
          Alvara&apos;s BTS Factory enables users to design and create their own
          ERC-BTS tokens, meaning absolutely anyone can operate as a fund
          manager by adding tokens from any supported blockchain to their BTS.
          <br />
          <br />
          Successfully minting a BTS is dependent on the user must making
          minimum contribution of 1 ETH. However, for those users solely wishing
          to simply contribute towards a BTS, they face no prerequisite minimum
          to do so.
          <br />
          <br />
          Once minted, the ERC-BTS can be held by the fund creator, providing
          access to management rights and management fees. The ownership rights
          are transferred to the user in the form of an NFT. Join The Hive
        </p>
        <UnstyledLink href="/presale">
          <Button
            variant="primary"
            className="max-w-max rounded-lg py-4 uppercase "
          >
            join the hive
          </Button>
        </UnstyledLink>
      </div>
    </section>
  );
}
