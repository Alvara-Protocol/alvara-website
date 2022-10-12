import React from 'react';

import { Hives, Info } from '@/components';

export default function Hivex() {
  return (
    <main className="mb-10 flex flex-col items-center gap-12">
      <Hives className="flex w-full flex-col items-center">
        <div className="mx-8 flex max-w-[560px] flex-col items-center gap-12 pt-[150px]">
          <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
            Hivex
          </h2>
          <p>
            Why is the exchange so good? looks nice, easy to use, web3 - link
            metamask, secure, ability to trade ETFs, ability to build (only
            place to build), facilitate onboarding with HiveMind trading. Add a
            general description of the items listed below. You can introduce the
            list and include any relevant information you want to share. Double
            click to edit the text.
          </p>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-7 px-8 md:grid-cols-3 md:px-32">
        <Info
          image="/images/hivex/trade-c-etfs.png"
          title="Trade C-ETFs"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
        <Info
          image="/images/hivex/build-a-fund.png"
          title="Build a Fund"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
        <Info
          image="/images/hivex/create-redeem.png"
          title="Create & Redeem ETF Shares"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
        <Info
          image="/images/hivex/transfer.png"
          title="Transfer of Ownership"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
        <Info
          image="/images/hivex/fiat.png"
          title="Fiat Gateway"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
        <Info
          image="/images/hivex/item.png"
          title="Item title"
          description="Describe the item and include any relevant details. Click to edit the text"
        />
      </div>
    </main>
  );
}
