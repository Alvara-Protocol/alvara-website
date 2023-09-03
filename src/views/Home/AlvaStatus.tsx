import React from 'react';

import { NextImage } from '@/components';

import AlvaStatusItem from './components/AlvaStatusItem';

import statusBack from '~/images/status-back.png';

export default function AlvaStatus() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10">
      <h1 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat text-4xl font-medium tracking-widest">
        ALVA in Numbers
      </h1>
      <div className="mb-20 grid grid-cols-[repeat(1,minmax(300px,320px))] items-center gap-8 md:grid-cols-[repeat(2,minmax(300px,350px))]">
        <AlvaStatusItem price="60M" percent={1} description="alva supply" />
        <AlvaStatusItem
          price="4.8M"
          percent={0.2}
          description="Circulating Supply at Launch"
        />
      </div>
      <NextImage
        className="absolute -bottom-10 right-0 hidden opacity-40  md:block "
        width={600}
        height={300}
        src={statusBack}
        alt="top-right-hives"
      />
    </section>
  );
}
