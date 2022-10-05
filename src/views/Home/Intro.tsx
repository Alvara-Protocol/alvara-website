import React from 'react';

import { NextImage } from '@/components';

import logo from '~/images/logo.png';

export default function Intro() {
  return (
    <div className="container mx-auto mb-28 flex flex-row items-end">
      <section className="flex w-1/2 flex-col gap-[60px] py-[72px] pl-[72px]">
        <span className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-transparent">
          ALVARA PROTOCOL
        </span>
        <div>
          <h2 className="font-medium uppercase tracking-wider">
            We&apos;re Changing the Way the World Invests.
          </h2>
          <div className="h-[4px] w-full bg-gradient-to-r from-purple-650 to-transparent"></div>
        </div>
        <p>
          General overview of the alvara protocol. hive stuff etc here and link
          out to ETF article (mentioning the hive analogy)
          <br /> I&apos;m a paragraph. Click here to add your own text and edit
          me. It&apos;s easy. <br />
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. I&apos;m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </section>
      <div className="w-1/2">
        <NextImage
          className="m-auto"
          width={380}
          height={380}
          src={logo}
          alt="top-right-hives"
        />
      </div>
    </div>
  );
}
