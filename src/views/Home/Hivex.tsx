import React from 'react';

import { Button, NextImage } from '@/components';

import Currencies from './Currencies';

import hives from '~/images/hives-2.png';

export default function Hivex() {
  return (
    <section className="relative mx-auto flex flex-row items-center bg-gray-400 py-[90px]">
      <Currencies className="absolute top-3 left-1/2 -translate-x-1/2 -translate-y-full " />
      <div className="w-1/2">
        <NextImage
          className="m-auto"
          width={335}
          height={490}
          src={hives}
          alt="top-right-hives"
        />
      </div>
      <div className="flex w-1/2 flex-col gap-8 px-10">
        <h2>HiveX</h2>
        <div className="h-[4px] w-1/2 bg-gradient-to-r from-purple-650 to-transparent"></div>
        <p>
          General overview of the alvara protocol. hive stuff etc here and link
          out to ETF article (mentioning the hive analogy)
          <br /> I&apos;m a paragraph. Click here to add your own text and edit
          me. It&apos;s easy. <br />
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. I&apos;m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <Button variant="outline" className="max-w-max py-4 uppercase">
          join the hive
        </Button>
      </div>
    </section>
  );
}
