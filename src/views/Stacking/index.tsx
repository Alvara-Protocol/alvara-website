import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function Staking() {
  return (
    <main>
      <section className="flex flex-col gap-28 bg-gray-400 pb-20">
        <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
          <div className="grid">
            <h1 className="z-10 text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
              Staking
            </h1>
            <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          </div>
        </Hives>
        <div className="container mx-auto grid grid-cols-1  gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
          Rewarding and benefiting users is at the forefront of everything we’ve
          created. <br />
          <br />
          By staking your ALVA on our platform, you will gain access to the
          Staking Rewards Vault (SRV). In turn, the vault is fed from a
          percentage of all fees collected by the platform, meaning those
          availing of the staking opportunity will be eligible to claim rewards
          on a weekly basis.
          <br />
          <br />
          The amount of rewards you can claim will depend on the ratio of your
          staked ALVA as a percentage of the total staked, segmented by locking
          periods. For example, if you have locked your tokens for 4 years, you
          will take from the same pool each week (20% of the total rewards
          vault). The rewards you can claim will be calculated based on the
          total rewards for your pool, divided by the total ALVA staked across
          all pools, and then multiplied by your staked ALVA balance.
          <br />
          <br /> In addition to staking ALVA, you can also stake your BTS LP
          tokens to receive a percentage of the weekly ALVA rewards allocated to
          your ERC-BTS. However, please note that your BTS LP tokens must belong
          to an ERC-BTS that has an open pool on our platform. If you would like
          to propose a fund to have its own staking pool, you can do so within
          the Alvara DAO and request approval from the community. Once approved,
          veALVA holders can allocate their tokens on a weekly basis during “The
          Dance”. Only staked BTS LP tokens will be eligible to receive a
          percentage of the reward supply. The rewards you can claim are based
          on reward supply, user balance, and locking period. <br />
          <br />
          Users also have the option of utilising the compounding rewards
          feature. By opting to compound your rewards, those rewards will be
          used to purchase and then stake ALVA, giving them a larger percentage
          of the total pool and therefore a larger percentage of the fee rewards
          at the following distribution. Compounding rewards is the only way to
          add more ALVA to your staked balance without resetting your locking
          period. However, please note that compounding rewards will not
          replenish your veALVA balance.
          <br />
          <br /> The user will be responsible for paying all gas fees associated
          with our platform. However, there&apos;s no need to claim rewards
          every week, and any unclaimed balance will accrue and be available to
          claim at a later date.
          <br /> <br />
          We&apos;re fully committed to delivering our users a secure and
          rewarding staking experience. <br />
          Join our discord today to find out more about our staking platform!
        </div>
        <div className="hidden h-[1085px]  w-full bg-[url('/images/staking/back.svg')] bg-cover bg-center bg-no-repeat md:block"></div>
        <div className=" flex h-[1300px]   w-full place-content-between bg-[url('/images/staking/mobile-back.svg')] bg-cover bg-center bg-no-repeat  pt-[440px] md:hidden">
          <div
            className={
              " group relative flex  h-[600px] w-20  place-content-center bg-[url('/images/staking/arrow1.svg')] bg-center bg-no-repeat "
            }
          >
            <Button className=" -ml-10 bg-none px-0">
              <NextImage
                className="m-auto "
                width={30}
                height={30}
                src={exclamationSvg}
                alt="exclamation"
              />
            </Button>
            <span
              className="absolute left-1/2 my-4 hidden w-32  translate-y-64 translate-x-0 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
            >
              x% APY based on locking period
            </span>
          </div>
          <div
            className={
              " group relative flex  h-[600px] w-20  place-content-center bg-[url('/images/staking/arrow2.svg')] bg-center bg-no-repeat "
            }
          >
            <Button className=" ml-10 bg-none px-0">
              <NextImage
                className="m-auto "
                width={30}
                height={30}
                src={exclamationSvg}
                alt="exclamation"
              />
            </Button>
            <span
              className="absolute left-1/2 my-4 hidden w-32   translate-y-64 -translate-x-32 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
            >
              veALVA which decays based on locking period
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
