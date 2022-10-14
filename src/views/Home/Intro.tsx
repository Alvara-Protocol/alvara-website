import React from 'react';

import { NextImage } from '@/components';

import logo from '~/images/logo.png';

export default function Intro() {
  return (
    <div className="container mx-auto mb-28 flex flex-row items-end">
      <section className="flex w-1/2 flex-col gap-[60px] py-[72px] pl-[72px]">
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
      <div className="mx-auto max-w-[550px]">
        <NextImage
          className=" "
          width={380}
          height={380}
          src={logo}
          alt="top-right-hives"
        />
      </div>
    </div>
  );
}
