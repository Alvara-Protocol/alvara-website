import * as React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Links from '@/views/News/Links';

export default function Footer() {
  return (
    <footer className="border-gradient3 mx-8 grid grid-cols-10 justify-center border-t pt-14 pb-4 font-montserrat lg:justify-start lg:py-16">
      <div className="order-last col-span-10 lg:col-span-6">
        <div className="hidden items-center gap-8 lg:flex">
          <NextImage
            useSkeleton
            className="mt-1.5 mr-12 w-48"
            src="/images/nav-logo-black.png"
            width="230"
            height="45"
            alt="Alvara"
          />
          <UnstyledLink href="/hivex">HiveX</UnstyledLink>
          <UnstyledLink href="/about">About</UnstyledLink>
          <UnstyledLink href="/roadmap">Careers</UnstyledLink>
        </div>
        <p className="mt-16 mb-10 text-center text-[18px] text-dark-blue-400 lg:text-left">
          Email: contact@alvaraprotocol.io
        </p>
        <div className="flex justify-center gap-6 lg:justify-start">
          <Links visible={false} />
        </div>
        <p className="mt-12 text-center text-[18px] text-dark-blue-400 lg:text-left">
          ©2023 by Alvara
        </p>
      </div>
      <div className="col-span-10 flex flex-col items-center lg:order-last lg:col-span-4 lg:items-start">
        <NextImage
          useSkeleton
          className="w-48 lg:hidden"
          src="/images/nav-logo-black.png"
          width="230"
          height="45"
          alt="Alvara"
        />
        <p className="hidden text-[27px] text-dark-blue-400 lg:pt-3">
          SUBSCRIBE
        </p>
        <p className="my-7 hidden text-stone-600 lg:mt-6 lg:mb-5">
          Sign up to receive Alvara news and updates
        </p>
        <form
          action="/api/form"
          method="post"
          className="hidden flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-0"
        >
          <input
            type="email"
            className="min-h-[58px] min-w-[364px] border border-dark-blue-400 p-3 text-stone-600 placeholder-stone-600 lg:min-w-fit"
            name="email"
            placeholder="Email"
            required
          />
          <Button variant="outline" className="max-w-max py-4 uppercase">
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  );
}
