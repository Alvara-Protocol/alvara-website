import React from 'react';

import { Hives, Info } from '@/components';

export default function Hivex() {
  return (
    <main className="mb-10 flex flex-col items-center gap-12">
      <Hives className="flex w-full flex-col items-center">
        <div className="mx-8 flex max-w-[800px] flex-col items-center gap-12 pt-[150px]">
          <h1 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest md:text-4xl">
            Hivex.
          </h1>
          <p className="text-center">
            The exclusive home of Alvara&apos;s SmartFunds, our HiveX is a
            hybridized exchange (HEX), utilizing both blockchain and off-chain
            technology to deliver a blazingly fast and secure trading
            experience. Powered by Finex&apos;s Go matching engine, HiveX can
            process over 500,000 transactions per second.
            <br />
            <br />
            Trade, build, create and redeem SmartFund shares directly on the
            HiveX. Our fiat gateway provides the ability to purchase
            cryptocurrency seamlessly within the platform.
            <br />
            <br />
            HiveX is a licensed hybrid exchange, fully AML, CFT and KYC
            compliant.
          </p>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-8 px-8 md:grid-cols-[repeat(3,minmax(250px,300px))] md:px-32">
        <Info
          image="/images/hivex/trade.svg"
          title="Trade"
          description="Trade SmartFund shares on Alvara's order book exchange, powered by a Finex Go matching engine."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
        <Info
          image="/images/hivex/build.svg"
          title="Build"
          description="Access Alvara's creation portal to design your own fund. Join the next generation of digital asset fund managers."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
        <Info
          image="/images/hivex/create-redeem.svg"
          title="Create & Redeem"
          description="Create and redeem your SF shares for their net asset value, taking advantage of arbitrage opportunities."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
        <Info
          image="/images/hivex/transfer.svg"
          title="Transfer"
          description="Time to retire? Sell your fund's NFT on Alvara's NFT marketplace to the highest bidder."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
        <Info
          image="/images/hivex/fiat.svg"
          title="Fiat Gateway"
          description="Seamlessly bridging fiat and crypto without leaving the platform."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
        <Info
          image="/images/hivex/compliance.svg"
          title="Compliance"
          description="Taking a pragmatic position on decentralization - the Alvara protocol is fully AML, CFT & KYC compliant."
          type={1}
          imageClassName="rounded-full border border-fuchsia-450 p-6"
        />
      </div>
    </main>
  );
}
