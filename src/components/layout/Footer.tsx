import * as React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Links from '@/views/News/Links';

export default function Footer() {
  return (
    <footer className=" mb-8 grid grid-cols-10 justify-center border-t border-[#D515AD] pt-14 pb-4 font-montserrat shadow-xl lg:mx-10 lg:justify-start lg:px-20 lg:py-16">
      <div className=" col-span-10 items-center lg:col-span-4">
        <div className="grid justify-items-center gap-8 lg:flex">
          <NextImage
            useSkeleton
            className="mt-1.5   w-48 "
            src="/images/nav-logo-black.png"
            width="230"
            height="45"
            alt="Alvara"
          />
        </div>
        <p className="mt-10 mb-10 text-center text-[18px] text-dark-blue-400 lg:text-left">
          Email: contact@alvaraprotocol.io
        </p>
        <div className="flex justify-center gap-6 lg:justify-start">
          <Links visible={false} />
        </div>
      </div>
      <div className=" col-span-10 mt-5 flex justify-between lg:col-span-6 lg:mt-0">
        <div className="mx-10 grid gap-3 lg:mx-0">
          <h1 className="text-lg font-bold ">General</h1>
          <UnstyledLink href="/team">About Alvara</UnstyledLink>
          <UnstyledLink href="/bts-factory">BTS Factory</UnstyledLink>
          <UnstyledLink href="/market-place">Market place</UnstyledLink>
          <UnstyledLink href="/hivex">HiveX</UnstyledLink>
          <UnstyledLink href="/news">News</UnstyledLink>
        </div>
        <div className="grid content-start gap-3">
          <h1 className="text-lg font-bold ">Stacking</h1>
          <UnstyledLink href="/stacking">Stacking</UnstyledLink>
          <div className="mt-5 block lg:hidden">
            <h1 className="text-lg font-bold ">Govenance</h1>
            <UnstyledLink href="/governance">Govenance</UnstyledLink>
          </div>
        </div>
        <div className="hidden content-start gap-3 lg:grid">
          <h1 className="text-lg font-bold ">Govenance</h1>
          <UnstyledLink href="/governance">Govenance</UnstyledLink>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className=" col-span-10 my-10 h-[2px] w-3/5 justify-self-center bg-[#D515AD]/40"></div>
      <div className="col-span-10 mx-5 flex flex-col items-center lg:order-last lg:col-span-10 lg:mx-0 ">
        <p className="text-xl font-bold text-dark-blue-400 lg:pt-3">
          SUBSCRIBE
        </p>
        <p className="my-7 text-center text-stone-600 lg:mt-1 lg:mb-5">
          Sign up to receive Alvara news and updates
        </p>
        <form
          action="/api/form"
          method="post"
          className="flex h-14 items-center gap-4  rounded-xl bg-gray-400 px-1   lg:flex-row lg:items-stretch  lg:gap-0"
        >
          <input
            type="email"
            className="font-inter h-12  rounded-xl bg-gray-400 px-3 font-normal text-[black] placeholder-[#94A3B8] outline-none lg:min-w-[30rem] "
            name="email"
            placeholder="Email"
            required
          />
          <Button
            variant="primary"
            className="h-12 max-w-max  self-center rounded-xl py-4 uppercase "
          >
            Subscribe
          </Button>
        </form>
        <p className="mt-12 text-center text-[18px] text-dark-blue-400 lg:text-left">
          ©2023 by Alvara
        </p>
      </div>
    </footer>
  );
}
