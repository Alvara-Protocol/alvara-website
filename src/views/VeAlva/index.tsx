import Image from 'next/image';
import React from 'react';
import Zoom from 'react-medium-image-zoom';

import { Hives, NextImage } from '@/components';

export default function VeAlva() {
  return (
    <div className="flex min-h-[calc(100vh)] flex-col gap-20 bg-slate-900 px-2 text-white sm:px-0">
      <Hives className="flex flex-col items-center gap-10 px-4 pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl leading-normal  text-gray-400 md:text-[60px]">
            veALVA
          </h1>
          <h1 className=" text-center text-xl font-light">
            veALVA is your key to influence and rewards within the Alvara
            ecosystem.
          </h1>
        </div>
      </Hives>
      <div className="container mx-auto">
        <div className="bg-[#0D0F23]text-left  container mx-auto flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 md:flex-row">
          <div className="grid gap-[26px] p-10  md:py-[49px] md:pl-10">
            <h1 className=" text-xl font-medium">Staking</h1>
            <p className="text-sm font-normal opacity-80">
              By staking ALVA tokens on our platform, you will unlock access to
              the Staking Rewards Vault (SRV). This vault is replenished with a
              percentage of all fees collected by the platform. <br />
              <br /> However, access to the SRV is only the tip of the iceberg,
              as the real benefit from staking is the veALVA users receive in
              exchange. veALVA is the real key to the bank vault as it is
              required during the weekly gauge voting event where holders
              allocate their veALVA to whichever eligible ERC-BTS they want to
              receive that week&apos;s ALVA reward stream. For an ERC-BTS to
              become eligible it must be voted in via Alvara&apos;s DAO.
            </p>
          </div>
          <NextImage
            width={300}
            height={400}
            src="/images/staking/staking-back.svg"
            alt="bee"
          />
        </div>

        <section className="mt-[60px]">
          <h1 className="mb-[20px] text-4xl font-medium">Governance</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="bg-[#0D0F23]text-left  container mx-auto flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 md:flex-row">
              <div className="grid gap-[26px] p-10  md:py-[49px] md:pl-10">
                <h1 className=" text-xl font-medium">
                  VeALVA (Vote-escrowed ALVA)
                </h1>
                <p className="text-sm font-normal opacity-80">
                  Alvara is a decentralized autonomous organisation (DAO) that
                  is governed by ALVA token holders who have staked their tokens
                  to receive veALVA.
                  <br />
                  <br /> veALVA holders can participate in the management and
                  development of the protocol. The Alvara DAO makes decisions
                  regarding the distribution of ALVA rewards and the allocation
                  of veALVA to different decentralized BTS platforms that have
                  been deployed via Alvara&apos;s platform. <br />
                  <br />
                  To vote on proposals and to vote on directing the ALVA reward
                  stream, you must hold veALVA.
                </p>
              </div>
              <div>
                <NextImage
                  width={200}
                  height={200}
                  src="/images/staking/governance-back1.png"
                  alt="governance"
                />
                <div className="hidden md:block">
                  <NextImage
                    width={200}
                    height={200}
                    src="/images/staking/governance-back1.png"
                    alt="governance"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#0D0F23]text-left  container mx-auto flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 md:flex-row">
              <div className="grid gap-[26px] p-10  md:py-[49px] md:pl-10">
                <h1 className=" text-xl font-medium">Voting Mechanism</h1>
                <p className="text-sm font-normal opacity-80">
                  The quorum for the Alvara DAO is 20%, which means that at
                  least 20% of the veALVA holders must participate in a vote for
                  it to be valid. The pass rate, which is the percentage of
                  votes required for a proposal to be successful, is 51%. <br />
                  <br />
                  Enacted proposals can be reversed by submitting another
                  proposal that meets the same pass rate and quorum
                  requirements. <br />
                  <br /> To summarize, the Alvara Protocol&apos;s governance
                  structure provides a transparent and democratic way for token
                  holders to participate in decision-making.
                  <br />
                  <br /> The Alvara DAO, as a decentralized autonomous
                  organisation, ensures that the protocol&apos;s development and
                  management aligns with the interests of its users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[60px]">
          <div className="bg-[#0D0F23]text-left  container mx-auto flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 md:flex-row">
            <div className="grid gap-[26px] p-10  md:pl-10">
              <h1 className=" text-xl font-medium">ALVA Wars</h1>
              <p className="text-sm font-normal opacity-80">
                The ALVA wars are focused around controlling as much of
                ALVA&apos;s supply as possible. Holding and staking ALVA gives
                the power of governance, and the power of governance grants
                access to the massive 88M ALVA reward stream. How will you
                strategize to come out on top?
                <br />
                <br /> The more ALVA you hold, the more veALVA you can access,
                and the more veALVA you can access, the more ALVA you will hold.
                Let the games begin.
              </p>
            </div>
            <NextImage
              width={300}
              height={300}
              src="/images/staking/alva-war-back.png"
              alt="bee"
            />
          </div>
        </section>

        <section className="mb-40 mt-[60px]">
          <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
            <Zoom>
              <Image
                src="/images/staking/stake-bottom-img.png"
                width={688}
                height={388}
                alt="stake-back"
              />
            </Zoom>
            <Zoom>
              <Image
                src="/images/staking/governance-bottom-img.png"
                width={688}
                height={388}
                alt="governance-back"
              />
            </Zoom>
          </div>
        </section>
      </div>
    </div>
  );
}
