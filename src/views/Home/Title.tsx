import React from 'react';

import { Button, Hives } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Title() {
  return (
    <Hives className="flex flex-col items-center gap-8 p-10 pt-[150px] md:pt-[200px]">
      <h1 className="text-center text-3xl font-bold leading-[70px] text-gray-400 md:text-5xl ">
        Tokenised Funds For <br /> A Defi Future
      </h1>
      <p className="mt-8 max-w-5xl text-center text-lg text-gray-400">
        A cutting-edge trading platform empowering the next generation of fund
        managers.
        <br />
        Build. Manage. Earn.
      </p>
      <div className="flex gap-5">
        <UnstyledLink href="http://discord.gg/pHDDF2MS8v ">
          <Button className="rounded-lg px-8 py-3 text-xl font-light ">
            Discord
          </Button>
        </UnstyledLink>
        <UnstyledLink href="http://t.me/alvaraprotocol">
          <Button className="rounded-lg px-8 py-3 text-xl font-light ">
            Telegram
          </Button>
        </UnstyledLink>
      </div>
    </Hives>
  );
}
