import React from 'react';

import { Button, Hives, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import bee from '~/images/bee.png';

export default function Title() {
  return (
    <Hives className="mx-4 mb-[200px]  flex flex-col items-center gap-8 pt-[150px] md:pt-[250px]">
      <NextImage
        className="absolute -bottom-20 right-0 -z-[1] md:left-1/2 md:translate-x-1/2"
        width={300}
        height={300}
        src={bee}
        alt="bee"
      />
      <h1 className="text-center text-3xl font-normal leading-[70px] md:text-[64px]">
        ETFs for a DeFi Future
      </h1>
      <p className="mt-8 text-center text-2xl">
        Build. Manage. Earn.
        <br className="md:hidden" /> A cutting-edge trading platform empowering
        the next generation of fund managers.
      </p>
      <UnstyledLink href="/presale">
        <Button className="px-8 text-xl font-light">Join The Hive</Button>
      </UnstyledLink>
    </Hives>
  );
}
