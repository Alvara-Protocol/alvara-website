import React from 'react';

import AlvaStatus from './AlvaStatus';
import Hivex from './Hivex';
import Intro from './Intro';
import Intro2 from './Intro2';
import Partners from './Partners';
import Title from './Title';

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh)] flex-col gap-20 text-black">
      <Title />
      <Intro />
      <Hivex />
      <Intro2 />
      <AlvaStatus />
      <Partners />
    </main>
  );
}
