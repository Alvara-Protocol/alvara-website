import React from 'react';

import { Button, Hives } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

// import background from '~/images/home/bg.png';

export default function Title() {
  return (
    <Hives className="flex flex-col items-center justify-center gap-8 p-10 pt-[150px] font-montserrat  md:pt-[200px]">
      {/* <NextImage
        className="absolute left-0 right-0 top-20  hidden w-full self-center md:block md:!max-h-[500px]"
        width={1000}
        height={400}
        src={background}
        alt="top-right-hives"
      /> */}
      <div className="md:max-w-[560px] ">
        <h1 className="text-center text-3xl font-medium leading-[70px] text-gray-400 md:text-5xl ">
          Tokenised Funds for a <a className="font-bold text-[#8A15D5]">DeFi</a>{' '}
          Future
        </h1>
        <p className="mt-8 max-w-5xl text-center text-base text-gray-400">
          A full suite built for the next generation of fund managers. Build.
          Manage. Earn.
        </p>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-5 md:flex-row">
          <UnstyledLink
            href="http://discord.gg/pHDDF2MS8v"
            className="w-full md:w-auto"
          >
            <Button
              variant="light"
              className="flex !w-full items-center justify-center rounded-lg px-8 py-3 text-center text-xl font-light"
            >
              Discord
            </Button>
          </UnstyledLink>
          <UnstyledLink
            href="http://t.me/alvaraprotocol"
            className="w-full md:w-auto"
          >
            <Button
              className="outline flex w-full items-center justify-center rounded-lg px-8 py-3 text-xl font-light outline-1"
              variant="ghost"
            >
              Telegram
            </Button>
          </UnstyledLink>
        </div>
      </div>
    </Hives>
  );
}
