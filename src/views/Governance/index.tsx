import React from 'react';

import { Hives } from '@/components';

import Back from '@/views/Governance/Back';

export default function Governance() {
  return (
    <main>
      <section className="flex flex-col gap-28 bg-gray-400 pb-20">
        <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
          <div className="grid">
            <h1 className="z-10 text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
              Governance
            </h1>
            <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          </div>
        </Hives>
        <div className="container mx-auto  grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
          Alvara is a decentralised autonomous organisation (DAO) that is
          governed by ALVA token holders who have staked their tokens to receive
          veALVA. <br />
          <br />
          veALVA holderscan participate in the management and development of the
          protocol. The Alvara DAO makes decisions regarding the distribution of
          ALVA rewards and the allocation of veALVA to different decentralised
          BTS platforms that have been deployed via Alvara&apos;s platform.{' '}
          <br />
          <br />
          To vote on proposals, you must hold veALVA. However, anyone can view
          the proposals on the platform. Proposals can be made by any user who
          holds a minimum of 2000 veALVA, and any user holding veALVA can vote
          on a proposal.
          <br />
          <br /> The quorum for the Alvara DAO is 20%, which means that at least
          20% of the veALVA holders must participate in a vote for it to be
          valid. This quorum can only be altered via proposals made to the DAO.
          The pass rate, which is the percentage of votes required for a
          proposal to be successful, is 51%. This pass rate can also be altered
          via proposals to the DAO. <br />
          <br />
          Enacted proposals can be reversed by submitting another proposal that
          meets the same pass rate and quorum requirements. <br />
          <br />
          To summarise, the Alvara Protocol&apos;s governance structure provides
          a transparent and democratic way for token holders to participate in
          decision-making. The Alvara DAO, as a decentralised autonomous
          organization, ensures that the protocol&apos;s development and
          management aligns with the interests of its users.
        </div>
        <div className=" hidden md:grid">
          <Back />
        </div>
        <div className="block h-[2200px] w-full bg-[url('/images/governance/mobile-back.svg')] bg-cover bg-center bg-no-repeat md:hidden"></div>
      </section>
    </main>
  );
}
