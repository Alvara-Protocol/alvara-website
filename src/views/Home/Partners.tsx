import React from 'react';

import Partner from './components/Partner';

export default function Partners() {
  return (
    <section className="container mx-auto mb-24 flex flex-col items-center justify-center gap-10">
      <h2 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
        partners
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        <Partner image="/images/partners/latch.png" name="LATCH" />
        <Partner image="/images/partners/latch.png" name="LATCH" />
        <Partner image="/images/partners/latch.png" name="LATCH" />
        <Partner image="/images/partners/latch.png" name="LATCH" />
        <Partner image="/images/partners/latch.png" name="LATCH" />
        <Partner image="/images/partners/latch.png" name="LATCH" />
      </div>
    </section>
  );
}
