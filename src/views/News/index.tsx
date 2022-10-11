import React from 'react';

import { Hives } from '@/components';

import Links from '@/views/News/Links';

export default function News() {
  return (
    <main>
      <Hives className="flex w-full flex-col items-center">
        <div className="flex max-w-[560px] flex-col items-center gap-12 pt-[150px]">
          <h2 className=" w-1/2 text-center font-montserrat font-medium uppercase tracking-widest">
            News.
          </h2>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p>Press release, medium articles and links to Alvara socials</p>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-4 items-center justify-center p-20">
        <Links visible={true} />
      </div>
    </main>
  );
}
