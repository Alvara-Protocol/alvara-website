import React from 'react';

import { Button, Hives, Info } from '@/components';

export default function Intro() {
  return (
    <section className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-start gap-10 px-4 pt-[150px] md:flex-row md:items-center md:justify-around md:px-11 md:pt-[250px]">
        <h1 className="z-10 text-left text-3xl uppercase  leading-normal md:text-[60px]">
          Smart <br />
          funds.
        </h1>
        <div className="flex max-w-[600px] flex-col gap-10 ">
          <p className="font-poppins text-base font-light tracking-widest md:text-base">
            Alvara SmartFunds are the name for our crypto ETFs. Offering
            investors the world&apos;s most popular investment vehicle, but on
            the blockchain. ETFs are number one for a reason - they provide a
            low risk, low cost, diversified and transparent investment
            opportunity.
          </p>
          <div className="h-[2px] w-full bg-gradient-to-r from-purple-650 to-transparent"></div>
          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 md:grid-cols-4 md:px-20">
        <Info
          image="/images/smart-funds/build.png"
          title="Low Risk"
          description="Risk is spread through investing in multiple assets and asset classes."
          size={114}
          type={1}
        />
        <Info
          image="/images/smart-funds/proof.png"
          title="Low Cost"
          description=" Management and operating expenses lower than other investment vehicles."
          size={114}
          type={1}
        />
        <Info
          image="/images/smart-funds/leaderboard.png"
          title="Transparent"
          description="An ETF’s holdings and weightings are disclosed publicly and regularly."
          size={114}
          type={1}
        />
        <Info
          image="/images/smart-funds/join.png"
          title="Diversificaction"
          description="ETFs offer instant diversification through exposure to a basket of underlying assets."
          size={114}
          type={1}
        />
      </div>
    </section>
  );
}
