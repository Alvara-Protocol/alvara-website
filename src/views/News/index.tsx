import React from 'react';

import { Hives } from '@/components';

export default function News() {
  return (
    <main className="flex flex-col gap-16 bg-[white] pb-20 md:gap-28">
      <Hives className="flex flex-col items-center gap-10 px-4 pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
            News
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-sm leading-10 text-black md:grid-cols-1 md:px-48">
        This is the go-to place for all the latest updates, articles, and
        announcements related to the protocol. Here, you&apos;ll find insightful
        blogs, in-depth analysis, and breaking news about Alvara Protocol&apos;s
        progress towards its mission of democratising access to financial
        services for all. Our team of experts will keep you up-to-date on all
        the developments and breakthroughs in the field of decentralised
        finance, blockchain technology, and financial inclusion. So, whether
        you&apos;re a curious learner, an industry insider, or an enthusiastic
        supporter of the Alvara Protocol, this is the page you don&apos;t want
        to miss!
      </div>
    </main>
  );
}
