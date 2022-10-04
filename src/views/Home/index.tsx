import React from 'react';

import Intro from './Intro';
import Title from './Title';

export default function Home() {
  return (
    <main className="container min-h-[calc(100vh)]  text-black">
      <Title />
      <Intro />
    </main>
  );
}
