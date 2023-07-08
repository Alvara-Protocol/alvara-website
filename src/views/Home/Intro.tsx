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
          <h2 className="text-4xl uppercase tracking-wider">
            We&apos;re Changing the Way the World Invests.
          </h2>
          <div className="h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent md:mt-5"></div>
        </div>
        <p className="w-full font-poppins text-base font-light tracking-widest">
          The desire and need for a successful mechanism that enables the wider
          crypto markets to enjoy the benefits of something akin to an ETF have
          been long-standing. That wait is over. <br />
          <br /> The Alvara Protocol is a first of its kind - one-stop
          decentralised crypto fund exchange with the capacity for built-in
          basket tokenised funds creation and own management portal.
          <br />
          <br /> This cutting-edge tokenised basket platform will play a pivotal
          role in empowering the next generation of fund managers.
          <br />
          <br /> Welcome to the future of DeFi. Welcome to the Alvara Protcol
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
