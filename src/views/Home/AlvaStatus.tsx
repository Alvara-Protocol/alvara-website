import React from 'react';

import AlvaStatusItem from './components/AlvaStatusItem';

export default function AlvaStatus() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <h1 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat text-4xl font-medium tracking-widest">
        ALVA in Numbers
      </h1>
      <div className="grid grid-cols-[repeat(1,minmax(300px,320px))] items-center gap-8 md:grid-cols-[repeat(2,minmax(300px,350px))]">
        <AlvaStatusItem price="200M" percent={0.2} description="alva supply" />
        <AlvaStatusItem
          price="16M"
          percent={0.2}
          description="Circulating Supply at Launch"
        />
      </div>
    </section>
  );
}
