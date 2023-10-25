import Image from 'next/image';
import React from 'react';

import { Button, Hives } from '@/components';

export default function Airdrop() {
  return (
    <main className="flex flex-col gap-16 bg-[#10122A] pb-20 text-white md:gap-28">
      <Hives className="grid place-content-center items-center gap-9 px-4 pt-40 md:grid-cols-3 md:flex-row md:px-11 md:pb-40">
        <div className="hidden md:block">
          <Image
            className="mb-4  rounded-full "
            src="/images/airdrop.png"
            layout="responsive"
            width={10}
            height={10}
            alt="roat"
          />
        </div>
        <div className="grid gap-9">
          <h1 className="z-10 text-center text-3xl  leading-normal  md:text-[60px]">
            Airdrop League
          </h1>
          <div className="grid max-w-[584px] gap-8 px-8 text-center text-base leading-10 md:leading-6">
            With a total reward pool of 4,000,000 ALVA tokens - worth $1,200,000
            at TGE - this colossal airdrop is a lucrative opportunity for
            blockchain enthusiasts, tech wizards and dedicated degens.
          </div>
          <div className="flex items-center justify-center">
            <Button
              variant="light"
              className="flex max-w-fit items-center justify-center gap-2 rounded-md "
            >
              <Image
                className="bg-white "
                src="/images/zealy.png"
                width={29}
                height={29}
                alt="zealty"
              />
              Zealy Airdrop
            </Button>
          </div>
        </div>
        <Image
          className="mb-4 rounded-full "
          src="/images/airdrop.png"
          layout="responsive"
          width={10}
          height={10}
          alt="row risk"
        />
      </Hives>
    </main>
  );
}
