import React from 'react';

import AlvaStatusItem from './components/AlvaStatusItem';

export default function AlvaStatus() {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-10">
      <h2 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
        ALVA in Numbers
      </h2>
      <div className="grid w-2/3 grid-cols-1 gap-8 md:grid-cols-2">
        <AlvaStatusItem price="200M" percent={0.2} description="alva" />
        <AlvaStatusItem
          price="10M"
          percent={0.2}
          description="Circulating Supply at Launch"
        />
        <AlvaStatusItem price="30M" percent={0.2} description="FDV AT LAUNCH" />
        <AlvaStatusItem
          price="0.15"
          percent={0.2}
          description="Listing Price"
        />
      </div>
    </section>
  );
}
