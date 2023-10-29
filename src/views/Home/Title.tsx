import React from 'react';

import { Button, Hives } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import { styles } from '@/styles';

export default function Title() {
  return (
    <div className="bg-gradient-to-b from-[#3F1960] to-slate-900">
      <div className="  md:h-24"></div>
      <Hives className="container mx-auto flex flex-col items-center justify-center gap-8 bg-[100%_auto] bg-center bg-no-repeat p-10  font-montserrat md:bg-[url('/images/home/bg.png')] md:py-32">
        <div className="">
          <h1
            className={[
              'text-center  font-medium leading-[70px] text-gray-400',
              styles.hives_title,
            ].join(' ')}
          >
            Tokenized Funds <br /> for a{' '}
            <a className="font-bold text-[#8A15D5]">DeFi</a> Future
          </h1>
          <p className="mt-8 max-w-5xl text-center text-lg text-gray-400">
            A full suite built for the next generation of fund managers. <br />{' '}
            Build. Manage. Earn.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-5 font-medium md:flex-row">
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
    </div>
  );
}
