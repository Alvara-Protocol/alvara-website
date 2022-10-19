import React from 'react';

import { Button, Hives, Seo } from '@/components';

import Timeline from './components/Timeline';

export default function Roadmap() {
  return (
    <main className="min-h-[calc(100vh)] ">
      <Seo templateTitle="Roadmap and Papers" />
      <Hives className="bg-gray-400 px-8 pt-28 pb-10 md:px-20 md:py-28">
        <h1 className="border-gradient mx-auto mb-8 w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest md:text-4xl">
          Roadmap and Papers
        </h1>
        <Timeline />
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-28 p-8 md:grid-cols-2">
        <div className="border-gradient2  border-2 bg-gray-400 px-8 py-28 text-center">
          <h2 className="text-center">Whitepaper.</h2>
          <div className="mx-auto mb-8 h-[2px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent "></div>
          <p className="mx-auto  mb-8 max-w-[350px] text-center font-poppins text-sm  font-light tracking-widest md:text-[20px]">
            Thorough description of the Alvara Protocol
          </p>

          <a href="/docs/whitepaper.pdf" target="_blank" rel="noreferrer">
            <Button variant="outline" className="max-w-max uppercase">
              View here
            </Button>
          </a>
        </div>
        <div className="border-gradient2  border-2 bg-gray-400 px-8 py-28 text-center">
          <h2 className="text-center">Deck.</h2>
          <div className="mx-auto  mb-8 h-[2px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p className="mx-auto  mb-8 max-w-[350px] text-center font-poppins text-sm font-light tracking-widest md:text-[20px]">
            A quick glance at what makes Alvara so sweet
          </p>

          <a href="/docs/deck.pdf" target="_blank" rel="noreferrer">
            <Button variant="outline" className="max-w-max uppercase ">
              View here
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
