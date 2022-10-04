import React from 'react';

import { Button, NextImage } from '@/components';

import hives from '~/images/hives-3.png';

export default function Intro2() {
  return (
    <div className="flex flex-row items-end">
      <section className="flex w-1/2 flex-col gap-[48px] py-[72px] pl-[72px]">
        <span className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-transparent">
          ALVARA PROTOCOL
        </span>
        <h2 className="font-medium uppercase tracking-wider">smart funds</h2>
        <div className="h-[4px] w-full bg-gradient-to-r from-purple-650 to-transparent"></div>
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
          learn more
        </Button>
      </section>
      <div className="w-1/2">
        <NextImage
          className="m-auto"
          width={430}
          height={480}
          src={hives}
          alt="top-right-hives"
        />
      </div>
    </div>
  );
}
