import React from 'react';

import { NextImage } from '@/components';

import logo from '~/images/logo.png';

export default function Intro() {
  return (
    <div className="container mx-auto mb-20 flex w-full flex-col  items-center justify-around gap-8 p-5 md:flex-row md:p-20">
      <section className="flex flex-col gap-[60px] md:w-1/2 ">
        <span className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-transparent">
          ALVARA PROTOCOL
        </span>
        <div>
          <h2 className="font-[50px] uppercase tracking-wider">
            We&apos;re Changing the Way the World Invests.
          </h2>
          <div className="h-[4px] w-full bg-gradient-to-r from-purple-650 to-transparent"></div>
        </div>
        <p>
          Delivering the world’s most popular financial product - Exchange
          Traded Funds - to crypto, the Alvara Protocol is the first of its kind
          - a one-stop crypto ETF exchange with built-in fund creation and
          management portal. Buzz into the portal and build your own SmartFund,
          testing your strategy on the HiveX leaderboard.
          <br />
          <br />
          <br /> A cutting-edge trading platform empowering the next generation
          of fund managers.
          <br />
          <br />
          <br />
          Welcome to the Hive!
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
