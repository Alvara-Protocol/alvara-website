import React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Currencies from './Currencies';

import hives from '~/images/hives-2.png';

export default function Hivex() {
  return (
    <section className="relative mx-auto flex flex-col-reverse items-center gap-4   bg-gradient-to-r from-[#10122A] to-[#3F1960] py-[90px] md:flex-row">
      <Currencies className="absolute left-1/2 top-10 w-full -translate-x-1/2 -translate-y-full md:w-3/4 " />
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
        <h1 className="text-4xl">BTS Factory</h1>
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-purple-650 to-transparent"></div>
        <p>
          The traditional prerequisites tied to conventional fund management no
          longer apply. <br />
          <br />
          Alvara&apos;s BTS Factory provides a platform for users to design and
          mint their unique BTS tokens. <br />
          In essence, anyone can step into the shoes of a fund manager by
          incorporating tokens from any supported blockchain into their BTS.
          <br />
          <br /> Once minted, the BTS token is held by the creator, granting
          access to management rights and associated revenue streams. <br />
          <br />
          These ownership rights are conveniently transferred to the user in the
          form of a Non-Fungible Token (NFT).
        </p>
        <UnstyledLink href="http://discord.gg/pHDDF2MS8v">
          <Button variant="primary" className="max-w-max rounded-lg py-4 ">
            Join The Hive
          </Button>
        </UnstyledLink>
      </div>
    </section>
  );
}
