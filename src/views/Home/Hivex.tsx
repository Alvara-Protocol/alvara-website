import React from 'react';

import { Button } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';
import TokenSelectImage from '@/components/Svg/TokenSelectImage';

export default function Hivex() {
  return (
    <div className="flex w-full flex-col  bg-gradient-to-r from-[#10122A] to-[#3F1960] p-5 py-36 lg:flex-row ">
      <div className="flex items-center justify-center px-10 ">
        <TokenSelectImage className=" h-full w-full max-w-xl lg:w-1/2 lg:min-w-[500px]" />
      </div>
      <section className="flex flex-col items-center justify-center gap-8 text-gray-400  lg:w-1/2 ">
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
          access to management rights and associated revenue streams. These
          ownership rights are conveniently transferred to the user in the form
          of a Non-Fungible Token. Each fund has its own governance system which
          prevents centralised resource control by the fund manager.
        </p>
        <UnstyledLink href="http://discord.gg/pHDDF2MS8v">
          <Button variant="primary" className="max-w-max rounded-lg py-4 ">
            Join The Hive
          </Button>
        </UnstyledLink>
      </section>
    </div>
  );
}
