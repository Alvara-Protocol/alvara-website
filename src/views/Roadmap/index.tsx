import React from 'react';

import { Button, Hives } from '@/components';

import Timeline from './components/Timeline';

export default function Roadmap() {
  return (
    <main className="min-h-[calc(100vh)] ">
      <Hives className="bg-gray-400 px-20 py-28">
        <Timeline />
      </Hives>
      <div className="container mx-auto flex flex-row items-center justify-between gap-28 p-8">
        <div className="border-gradient2 flex w-1/2 flex-col items-center gap-8 border-2 bg-gray-400 px-8 py-28">
          <h2>Whitepaper</h2>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p className="max-w-[350px] text-center font-poppins text-[20px] font-light tracking-widest">
            Thorough description of the Alvara Protocol
          </p>

          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
        <div className="border-gradient2 flex w-1/2 flex-col items-center gap-8 border-2 bg-gray-400 px-8 py-28">
          <h2>Deck.</h2>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p className="max-w-[350px] text-center font-poppins text-[20px] font-light tracking-widest">
            A quick glance at what makes Alvara so sweet
          </p>

          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
      </div>
    </main>
  );
}
