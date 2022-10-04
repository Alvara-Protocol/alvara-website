import React from 'react';

import Partner from './components/Partner';

import logo from '~/images/logo.png';

export default function Partners() {
  return (
    <section className="mb-24 flex flex-col items-center justify-center gap-10">
      <h2 className="border-gradient3 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
        partners
      </h2>
      <div className="flex flex-row gap-8">
        <Partner image={logo} name="Hello" />
        <Partner image={logo} name="Hello" />
        <Partner image={logo} name="Hello" />
        <Partner image={logo} name="Hello" />
        <Partner image={logo} name="Hello" />
      </div>
    </section>
  );
}
