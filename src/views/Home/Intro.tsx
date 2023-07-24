import React from 'react';

import { NextImage } from '@/components';

import logo from '~/images/logo.png';

export default function Intro() {
  return (
    <div className="container mx-auto mb-10 flex w-full flex-col  items-center justify-around gap-8 p-5 md:flex-row  md:px-20">
      <section className="flex flex-col gap-12 md:w-1/2 ">
        <span className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-3xl text-transparent">
          ALVARA PROTOCOL
        </span>
        <div>
          <h1 className="text-4xl tracking-wider">
            We&apos;re Changing the Way the World Invests.
          </h1>
          <div className="h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent md:mt-5"></div>
        </div>
        <p className="w-full font-poppins text-base font-light tracking-widest">
          There has been a longstanding demand for a mechanism within the vast
          cryptocurrency market that mirrors the benefits of Exchange-Traded
          Funds (ETFs). <b className="font-bold"> The wait is now over. </b>
          <br />
          <br />
          Introducing the Alvara Protocol, a groundbreaking decentralised
          crypto-fund platform that enables the creation and self-management of
          tokenised basket funds.
          <br />
          <br /> Poised to empower the upcoming generation of fund managers,
          Alvara is transforming the industry landscape.
          <br />
          <br /> Embrace the future of Decentralised Finance (DeFi). Welcome to
          the Alvara Protocol.
        </p>
      </section>
      <NextImage
        className="h-64 w-64 md:h-80 md:w-80 "
        width={380}
        height={380}
        src={logo}
        alt="top-right-hives"
      />
    </div>
  );
}
