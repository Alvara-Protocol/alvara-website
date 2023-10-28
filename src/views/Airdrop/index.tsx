import Image from 'next/image';
import React from 'react';

import { Button, Hives } from '@/components';

import { styles } from '@/styles';

export default function Airdrop() {
  return (
    <div className=" flex flex-col gap-16 bg-[#10122A] pb-20 text-white md:gap-28">
      <Hives className="relative grid place-content-center items-center gap-2 px-4 pt-[167px] md:grid-cols-3 md:px-11 md:pb-40 md:pt-[205px]">
        <div className="hidden md:block">
          <Image
            className="absolute top-0 mb-4 rounded-full "
            src="/images/airdrop.png"
            layout="responsive"
            width={10}
            height={10}
            alt="roatss "
          />
        </div>
        <div className="grid gap-9 self-start text-start">
          <h1
            className={[
              'z-10 break-normal text-center',
              styles.hives_title,
            ].join(' ')}
          >
            Airdrop League
          </h1>
          <div className="grid gap-8 px-8 text-center text-base leading-10 md:leading-6">
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
          className="absolute top-0 mb-4 rounded-full"
          src="/images/airdrop.png"
          layout="responsive"
          width={10}
          height={10}
          alt="row risk"
        />
      </Hives>
    </div>
  );
}
