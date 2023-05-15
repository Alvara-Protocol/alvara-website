import React from 'react';

import { Button, Hives } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Title() {
  return (
    <Hives className=" flex  flex-col items-center gap-8  p-10 pt-[150px] md:pt-[200px]">
      <h1 className="text-center text-3xl font-bold leading-[70px] text-gray-400 md:text-4xl ">
        TOKENISED FUNDS FOR A DEFI FUTURE
      </h1>
      <p className="mt-8 max-w-4xl text-center text-lg text-gray-400">
        A cutting-edge trading platform empowering the next generation of fund
        managers. Build. Manage. Earn.
      </p>
      <UnstyledLink href="/presale">
        <Button className="rounded-lg px-8 py-3 text-xl font-light">
          Join The Discord
        </Button>
      </UnstyledLink>
    </Hives>
  );
}
