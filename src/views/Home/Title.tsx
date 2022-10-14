import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import bee from '~/images/bee.png';

export default function Title() {
  return (
    <Hives className="mb-[150px] flex flex-col pt-[250px]">
      <NextImage
        className="absolute left-0 bottom-0 translate-y-full md:left-1/2 md:-bottom-5 md:translate-y-2/3 md:translate-x-1/2"
        width={300}
        height={300}
        src={bee}
        alt="bee"
      />
      <h1 className="text-center text-3xl font-normal leading-[70px] md:text-[64px]">
        ETFs for a DeFi Future
      </h1>
      <p className="mx-4 mt-4 text-center">
        A cutting-edge trading platform empowering the next generation of fund
        managers. Build. Manage. Earn.
      </p>
      <Button className="mx-auto mt-[46px] px-8">Join The Hive</Button>
    </Hives>
  );
}
