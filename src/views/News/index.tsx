import React from 'react';

import { Hives } from '@/components';

export default function News() {
  return (
    <main className="flex flex-col gap-16 bg-[white] pb-20 md:gap-28">
      <Hives className="flex flex-col items-center gap-10 px-4 pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
            News
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-sm leading-10 text-black md:grid-cols-1 md:px-48">
        Welcome to your one-stop hub for everything Alvara Protocol related. Fancy deep-diving into insightful 
        blogs? Looking for detailed analysis? Or, want the latest news on how the Protocol is 
        making financial services accessible for all? You'll find all of that here.
        <br />
        <br />
        Our expert team is dedicated to keeping you in the loop about everything happening 
        in the exciting worlds of decentralized finance, blockchain technology, 
        and financial inclusion. Whether you're just starting your journey, deeply involved in the industry, 
        or a passionate supporter of Alvara Protocol, this is the space you can't afford to miss!
      </div>
    </main>
  );
}
