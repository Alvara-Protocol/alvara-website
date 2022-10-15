import React from 'react';

import { Hives } from '@/components';

import Links from '@/views/News/Links';

export default function News() {
  return (
    <main>
      <Hives className="mb-20 flex w-full flex-col items-center">
        <div className="flex max-w-[560px] flex-col items-center gap-5 pt-[150px]">
          <h2 className=" w-1/2 text-center font-montserrat font-medium uppercase tracking-widest">
            News.
          </h2>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p>Stay up to date with everything Alvara.</p>
        </div>
      </Hives>
      <div className="container mx-auto my-20 grid items-center px-10 md:grid-cols-4 lg:px-20">
        <Links visible={true} />
      </div>
    </main>
  );
}
