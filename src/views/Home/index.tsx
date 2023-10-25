import React from 'react';

import AlvaStatus from './AlvaStatus';
import Hivex from './Hivex';
import Intro from './Intro';
import MacketPlace from './MacketPlace';
import Title from './Title';

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh)] flex-col gap-20 bg-slate-900  text-white">
      <Title />
      <Intro />
      <Hivex />
      <MacketPlace />
      <AlvaStatus />
      {/* <Partners /> */}
    </main>
  );
}
