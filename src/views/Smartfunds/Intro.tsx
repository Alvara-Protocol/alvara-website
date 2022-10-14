import React from 'react';

import { Button, Hives, Info } from '@/components';

export default function Intro() {
  return (
    <section className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-row items-center justify-around px-11 pt-[250px]">
        <h1 className="text-center text-[60px] uppercase leading-normal">
          Smart <br />
          funds.
        </h1>
        <div className="flex w-1/2 max-w-[600px] flex-col gap-10">
          <p className="font-poppins text-[20px] font-light tracking-widest">
            Alvara SmartFunds are the name for our crypto ETFs. Offering
            investors the world&apos;s most popular investment vehicle, but on
            the blockchain. ETFs are number one for a reason - they provide a
            low risk, low cost, diversified and transparent investment
            opportunity.
          </p>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-4 px-20">
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
