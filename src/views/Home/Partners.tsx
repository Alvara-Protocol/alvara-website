import React from 'react';

import Partner from './components/Partner';

export default function Partners() {
  return (
    <section className="container mx-auto mb-24 flex flex-col items-center justify-center gap-10 px-2">
      <h2 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat text-4xl font-medium uppercase tracking-widest">
        Partners
      </h2>
      <div className="flex flex-wrap place-content-center items-center justify-center gap-10 md:w-4/5 md:gap-0">
        <Partner
          image="/images/partners/hacken-io.svg"
          width="100"
          heigth="70"
          name="LATCH"
        />

        <Partner image="/images/partners/chainlink.svg" name="LATCH" />
        <Partner
          image="/images/partners/dextools.svg"
          name="LATCH"
          width="200"
          heigth="200"
        />
        <Partner
          image="/images/partners/ferrum-network.svg"
          width="200"
          heigth="200"
          name="LATCH"
        />
        <Partner image="/images/partners/fireblocks.svg" name="LATCH" />

        <Partner
          image="/images/partners/parsiq.svg"
          heigth="190"
          name="LATCH"
        />
        <Partner
          image="/images/partners/clintex.png"
          name="LATCH"
          width="120"
          heigth="30"
        />
        <Partner
          image="/images/partners/qan.svg"
          name="LATCH"
          width="130"
          heigth="30"
        />

        <Partner
          image="/images/partners/vEmpire.png"
          name="LATCH"
          heigth="60"
        />
      </div>
    </section>
  );
}
