import React from 'react';

import { Button, Hives, NextImage } from '@/components';

import Back from '@/views/Stacking/Back';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function Staking() {
  return (
    <main>
      <section className="flex flex-col gap-28 bg-gray-400 pb-20">
        <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
          <div className="grid">
            <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
              Staking
            </h1>
            <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          </div>
        </Hives>
        <div className="container mx-auto grid grid-cols-1  gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
          At Alvara, we prioritise delivering rewards and benefits to our users,
          integrating this ethos into every aspect of our development.
          <br />
          <br /> By staking your ALVA tokens on our platform, you unlock access
          to the Staking Rewards Vault (SRV). This vault is replenished with a
          percentage of all fees collected by the platform, meaning stakers can
          claim rewards weekly. <br />
          <br />
          Your claimable rewards are based on your staked ALVA&apos;s proportion
          of the total stake, considering specific locking periods. For example,
          if you lock your tokens for 4 years, you&apos;re eligible to claim
          from a specific pool each week, calculated based on your staked ALVA
          balance relative to the total staked across all pools.
          <br />
          <br /> Moreover, you can stake your BTS LP tokens to get a slice of
          the weekly ALVA rewards designated to your ERC-BTS. But remember, this
          applies if your BTS LP tokens belong to an ERC-BTS with an open
          staking pool on our platform. If you want to propose a staking pool
          for a fund, do so within Alvara DAO and earn community approval.
          Approved veALVA holders can allocate their tokens weekly during
          &quot;The Dance&quot;. Only staked BTS LP tokens can receive rewards,
          calculated based on supply, user balance, and locking period.
          <br />
          <br /> The compounding rewards feature provides the option to boost
          your rewards. If used, your rewards will be re-invested to purchase
          and stake additional ALVA, enhancing your share of the total pool and
          the subsequent fee rewards. Note that this is the only way to increase
          your ALVA stake without resetting your locking period, but it
          won&apos;t replenish your veALVA balance. <br />
          <br />
          Users bear the responsibility for all associated gas fees on the
          platform. However, claiming rewards weekly is not mandatory; unclaimed
          balances accumulate for future claims.
          <br />
          <br />
          <div>
            At Alvara, we&apos;re committed to delivering a secure and rewarding
            staking experience. Join our{' '}
            <a
              className=" font-bold "
              target="_blank"
              rel="noreferrer"
              href="https://t.me/alvaraprotocol"
            >
              Telegram
            </a>{' '}
            or{' '}
            <a
              className=" font-bold "
              target="_blank"
              rel="noreferrer"
              href="http://discord.gg/pHDDF2MS8v"
            >
              Discord
            </a>{' '}
            today and explore the staking platform further!
          </div>
        </div>
        <div className="hidden md:block">
          <Back />
        </div>
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
