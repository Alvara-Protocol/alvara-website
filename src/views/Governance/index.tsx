import React from 'react';

import { Hives } from '@/components';

import Back from '@/views/Governance/Back';

export default function Governance() {
  return (
    <main>
      <section className="flex flex-col gap-28 bg-gray-400 pb-20">
        <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
          <div className="grid">
            <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
              Governance
            </h1>
            <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          </div>
        </Hives>
        <div className="container mx-auto  grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
          Alvara operates as a Decentralised Autonomous Organisation (DAO) led
          by ALVA token holders. By staking tokens, holders receive veALVA and
          gain the ability to participate in protocol governance.
          <br />
          <br /> Anyone with a minimum of 2000 veALVA can create proposals, and
          every veALVA holder is entitled to vote on them. <br />
          <br />
          The Alvara DAO operates with a 20% quorum. This means at least 20% of
          veALVA holders must participate in a vote for it to be valid. Any
          changes to this quorum can only be made via DAO proposals. Similarly,
          the pass rate, which stands at 51% for a proposal to succeed, can also
          be adjusted through DAO proposals.
          <br />
          <br />
          Importantly, enacted proposals can be rescinded by submitting another
          proposal that fulfils the same quorum and pass rate conditions.
          <br />
          <br /> In a nutshell, Alvara Protocol&apos;s governance structure
          empowers token holders with a clear, democratic mechanism for
          participating in decision-making. As a DAO, Alvara ensures that the
          Protocol&apos;s evolution aligns with the best interests of its
          community members.
        </div>
        <div className=" hidden md:grid">
          <Back />
        </div>
        <div className="block h-[2200px] w-full bg-[url('/images/governance/mobile-back.svg')] bg-cover bg-center bg-no-repeat md:hidden"></div>
      </section>
    </main>
  );
}
