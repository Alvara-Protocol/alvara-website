import React from 'react';

import { NextImage } from '@/components';

import { styles } from '@/styles';
import TokenGroup from '@/views/Home/components/TokenGroup';

export default function Intro() {
  return (
    <div className=" container mx-auto flex w-full flex-col items-center justify-between gap-8 p-5 md:flex-row  ">
      <section className="flex flex-col gap-12 md:w-1/2 ">
        <div className="pointer-events-none flex max-w-fit items-center gap-5 rounded-xl bg-[#1B1F489C] px-4 py-[10px]">
          <NextImage
            useSkeleton
            src="/images/logo.png"
            width="30"
            height="30"
            alt="Logo"
          />
          ALVARA PROTOCOL
        </div>
        <div>
          <h1 className={[' tracking-wider', styles.secondary_title].join(' ')}>
            We&apos;re Changing <br /> the Way the World Invests
          </h1>
        </div>
        <p className={['w-full opacity-80', styles.context].join(' ')}>
          There has been a longstanding demand for a mechanism within the vast
          cryptocurrency market that allows users to hold multiple cross-chain
          assets in single, trackable basket.
          <b className="font-bold "> The wait is now over. </b>
          <br />
          <br />
          Introducing the Alvara Protocol, a groundbreaking decentralized
          crypto-fund platform that enables the creation and self-management of
          tokenized basket funds.
          <br />
          <br />
          Poised to empower the upcoming generation of fund managers, Alvara is
          transforming the industry landscape. Embrace the future of
          Decentralized Finance. Welcome to the Alvara Protocol.
        </p>
      </section>

      <TokenGroup />
    </div>
  );
}
