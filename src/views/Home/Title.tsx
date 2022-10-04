import React from 'react';

import { Button, NextImage } from '@/components';

import bee from '~/images/bee.png';
import hives from '~/images/hives.png';

export default function Title() {
  return (
    <div className="relative">
      <div className="blur-purple -top-[250px] -right-[250px]" />
      <NextImage
        className="absolute top-0 right-0 -translate-y-2/3 rotate-[180deg]"
        width={480}
        height={529}
        src={hives}
        alt="top-right-hives"
      />
      <section className="relative mt-[250px] mb-[450px] flex flex-col">
        <NextImage
          className="absolute bottom-0 translate-y-full"
          width={480}
          height={529}
          src={hives}
          alt="left-hives"
        />
        <NextImage
          className="absolute left-1/2 bottom-0 translate-y-2/3 translate-x-1/2"
          width={300}
          height={300}
          src={bee}
          alt="bee"
        />
        <h1 className="text-center text-[96px] font-normal leading-[196.13px]">
          ALVARA PROTOCOL
        </h1>
        <p className="-translate-y-full text-center">
          Delivering the world&apos;s most popular financial product to crypto.
        </p>
        <Button className="mx-auto mt-[46px] px-8">ALVA</Button>
      </section>
    </div>
  );
}
