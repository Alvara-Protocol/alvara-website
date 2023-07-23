import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import Back from '@/views/MarketPlace/Back';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function MarketPlace() {
  return (
    <main>
      <section className="flex flex-col gap-28 bg-gray-400 pb-20">
        <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
          <div className="grid">
            <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
              Marketplace
            </h1>
            <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          </div>
        </Hives>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
          Alvara offers a unique platform for both buyers and sellers within its
          community. The BTS Marketplace serves as a stage for creators to
          auction their BTS tokens. <br />
          <br />
          At the heart of the marketplace, creators can put up their BTS tokens
          for sale. This gives potential buyers a chance to secure management
          rights and a revenue stream from the BTS token. In addition, BTS token
          holders can gain a percentage of the trading fees generated when their
          fund&apos;s BTS LP tokens are listed and traded on HiveX.
          <br />
          <br /> Alvara strives for transparency, offering detailed information
          about each fund listed for sale. This includes metrics like
          profit/loss, DAO status, underlying assets, and annual revenue stream
          from management. This allows buyers to make informed decisions
          effortlessly. <br />
          <br />
          Sellers retain full autonomy over their auction listings, from setting
          the starting price, reserve price, to a &quto;buy-it-now&quto; price.
          If a buyer wishes to bid lower than the listed price, they can use the
          &quto;make-an-offer&quto; feature. Sellers can further enhance their
          listings by including a brief description to illustrate their fund and
          attract potential buyers.
          <br />
          <br />
          Ensuring transactional security and efficiency, all transactions in
          the BTS Marketplace are final and occur on-chain. <br />
          <br />
          Whether you want to list your BTS token or explore a variety of funds
          for purchase, Alvara invites you to join this dynamic community.
          Don&apos;t miss out.
        </div>
        <div className="hidden md:block">
          <Back />
        </div>
        <div className="block h-[1800px] w-full bg-[url('/images/market/mobile-back.svg')] bg-cover bg-center bg-no-repeat md:hidden">
          <div className=" group relative mt-[1400px] flex h-8 w-full place-content-center   bg-center bg-no-repeat ">
            <Button className=" place-self-center bg-none px-0">
              <NextImage
                className="m-auto "
                width={30}
                height={30}
                src={exclamationSvg}
                alt="exclamation"
              />
            </Button>
            <span
              className="absolute left-1/2 my-4 hidden w-72  translate-y-10 -translate-x-1/2 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
            >
              The NFT holds the rights for proposals regarding the fund and
              generates management fee for the fund manager.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
