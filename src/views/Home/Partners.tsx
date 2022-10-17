import React from 'react';

import Partner from './components/Partner';

export default function Partners() {
  return (
    <section className="container mx-auto mb-24 flex flex-col items-center justify-center gap-10">
      <h2 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat text-4xl font-medium uppercase tracking-widest">
        partners
      </h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,230px))] items-center justify-center gap-8">
        <Partner image="/images/partners/chainlink.svg" name="LATCH" />
        <Partner image="/images/partners/clintex.png" name="LATCH" />
        <Partner image="/images/partners/dextools.svg" name="LATCH" />
        <Partner image="/images/partners/ferrum-network.svg" name="LATCH" />
        <Partner image="/images/partners/fireblocks.svg" name="LATCH" />
        <Partner image="/images/partners/hacken-io.svg" name="LATCH" />
        <Partner image="/images/partners/openware.svg" name="LATCH" />
        <Partner image="/images/partners/parsiq.svg" name="LATCH" />
        <Partner image="/images/partners/qan.svg" name="LATCH" />
        <Partner image="/images/partners/vEmpire.png" name="LATCH" />
      </div>
    </section>
  );
}
