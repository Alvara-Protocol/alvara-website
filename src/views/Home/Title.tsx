import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import bee from '~/images/bee.png';

export default function Title() {
  return (
    <Hives className="mb-[100px] flex flex-col pt-[250px]">
      <NextImage
        className="absolute left-1/2 -bottom-5 translate-y-2/3 translate-x-1/2"
        width={300}
        height={300}
        src={bee}
        alt="bee"
      />
      <h1 className="text-center text-[64px] font-normal leading-[70px]">
        ALVARA PROTOCOL
      </h1>
      <p className="mt-4 text-center">
        Delivering the world&apos;s most popular financial product to crypto.
      </p>
      <Button className="mx-auto mt-[46px] px-8">ALVA</Button>
    </Hives>
  );
}
