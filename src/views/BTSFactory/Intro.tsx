/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Zoom from 'react-medium-image-zoom';

import {
  CheckIcon,
  Hives,
  LoaderIcon,
  NextImage,
  PlusWithCircleIcon,
} from '@/components';

import { styles } from '@/styles';

import BtsBack from '~/images/bts-back.png';

export default function Intro() {
  return (
    <section className="flex flex-col bg-slate-900 text-white">
      <Hives className="flex flex-col items-center gap-[38px] px-4 pt-[167px] md:px-11 md:pt-[205px]">
        <h1 className={['z-10 text-center', styles.hives_title].join(' ')}>
          BTS Factory
        </h1>
        <h4 className="text-center font-poppins text-sm font-light text-neutral-200 md:text-xl">
          Whether you're a seasoned pro or just starting,
          <br />
          this powerful tool empowers you to create
          <br />
          and mint BTS tokens effortlessly.
        </h4>
      </Hives>
      <div className="container mx-auto px-5">
        <div className="mt-[82px] flex flex-col items-end justify-between gap-[15px] rounded-lg border-2 border-white border-opacity-20 bg-gray-900 px-[20px] py-[49px] md:mt-[63px] md:px-[35px] xl:flex-row xl:items-center">
          <div className="flex flex-col gap-7">
            <h2 className={['w-0 md:w-auto', styles.secondary_title].join(' ')}>
              Revolutionary Technology
            </h2>
            <h4 className={['opacity-80', styles.context].join(' ')}>
              An ERC-BTS is our Basket Token Standard, allowing users to pull a
              collection of assets, across different chains into a single,
              manageable public fund. Enabling users to showcase their skills
              within crypto markets or take advantage of other skilled traders
              by contributing to their fund.
              <br />
              <br />
              Our ERC-BTS Factory is the primary architectural arm of the
              protocol.
              <br />
              <br />
              The ERC-BTS Factory enables users to design and deploy brand new
              tokenized funds on the blockchain. Tokens from any blockchain are
              supported, allowing for a first of its kind cross-chain fund
              creation.
            </h4>
          </div>
          <NextImage
            src="/images/bts-factory/networks.png"
            alt=""
            width={284}
            height={271}
            className="min-h-[271px] min-w-[284px] translate-x-[20px] md:translate-x-[35px]"
          />
        </div>
      </div>

      <div className="container mx-auto px-5">
        <div className="mt-[82px] flex flex-col gap-[28px] lg:flex-row lg:gap-[33px]">
          <div className="flex w-full flex-col gap-[28px] rounded-lg border border-white border-opacity-20 bg-gray-900 px-[20px] py-[66px] md:px-[35px]">
            <h3 className={['', styles.context_title].join(' ')}>
              Simplified creation process
            </h3>
            <h4 className={['opacity-80', styles.context].join(' ')}>
              Four easy steps to create your first basket of tokens, we handle
              all of the complexity on the backend ;)
            </h4>
            <div className="flex flex-wrap gap-[10px_24px]">
              <div className="inline-flex h-[50px] w-max items-center justify-center gap-2.5 border-b-2 border-white p-2.5 opacity-60">
                <div className="relative h-4 w-4">
                  <CheckIcon />
                </div>
                <div className={styles.context}>Connect</div>
              </div>
              <div className="inline-flex h-[50px] w-max items-center justify-center gap-2.5 border-b-2 border-white p-2.5 opacity-60">
                <div className="relative h-4 w-4">
                  <CheckIcon />
                </div>
                <div className={styles.context}>Details</div>
              </div>
              <div className="inline-flex h-[50px] w-max items-center justify-center gap-2.5 border-b-2 border-white p-2.5 opacity-60">
                <div className="relative h-4 w-4">
                  <CheckIcon />
                </div>
                <div className={styles.context}>Add assets</div>
              </div>
              <div className="inline-flex h-[50px] w-max items-center justify-center gap-2.5 border-b-2 border-white p-2.5">
                <div className="relative h-4 w-4">
                  <LoaderIcon />
                </div>
                <div className={styles.context}>Mint</div>
              </div>
            </div>
            <div className={['font-medium', styles.context].join(' ')}>
              Your BTS is now minting
            </div>
            <div className="flex items-center gap-[25px] rounded-lg border border-purple-700 border-opacity-90 bg-gradient-to-b from-purple-700 to-transparent p-[9px]">
              <NextImage
                src="/images/logo.png"
                width={38}
                height={38}
                alt=""
                className="h-[38px] w-[38px] rounded-lg border border-purple-700 bg-black p-1"
              />
              <div className={['font-medium', styles.context].join(' ')}>
                $HRV is now live!
              </div>
              <div className="ml-auto inline-flex h-full items-center justify-center gap-2.5 self-end rounded-lg border border-white border-opacity-20 px-3">
                <div className="font-norma font-poppins text-sm">Share</div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col  gap-[28px] rounded-lg border border-white border-opacity-20 bg-gray-900 px-[20px] pb-[46px] pt-[66px] md:px-[35px]">
            <h3 className={['', styles.context_title].join(' ')}>The steps</h3>
            <h4 className={['font-light opacity-80', styles.context].join(' ')}>
              Name your ERC-BTS and upload its logo. Be creative and inviting to
              potential contributors, be descriptive to show them how you
              allocate.
              <br />
              <br />
              Add the tokens you would like to include in your basket. These can
              be tokens across different chains and soon, NFTs too.
              <br />
              <br />
              Allocate the percentage weighting of your chosen assets. You can
              also set this to auto rebalance every month.
            </h4>
            <div className="inline-flex h-[37px] w-[140px] items-center justify-center gap-2.5 rounded-lg bg-zinc-100 px-3 py-2">
              <div className="relative h-4 w-4 opacity-50">
                <PlusWithCircleIcon />
              </div>
              <div className="font-poppins text-sm font-normal text-gray-900 opacity-50">
                Create a BTS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5">
        <div className="mt-[82px] flex flex-col items-start gap-[28px] lg:flex-row lg:gap-[33px]">
          <div className="relative flex w-full flex-col gap-[28px] rounded-lg border border-white border-opacity-20 bg-gray-900 px-[20px] py-[66px] pb-[30px] md:px-[35px]">
            <NextImage
              src="/images/bts-factory/percent_1.png"
              alt=""
              width={199}
              height={132}
              className="absolute right-0 top-0"
            />
            <h3 className={['', styles.context_title].join(' ')}>
              Minting fees
            </h3>
            <h4 className={['font-light opacity-80', styles.context].join(' ')}>
              The creation mechanism enables users to create (mint) new BTS LP
              tokens at the net asset value (NAV) of the underlying assets with
              any BTS. The total cost of initial creation of a new ERC-BTS is 1%
              with 0.5% burning ALVA and another 0.5% going to the Foundation.
            </h4>
          </div>
          <div className="relative flex w-full flex-col gap-[28px] rounded-lg border border-white border-opacity-20 bg-gray-900 px-[20px] py-[66px] md:px-[35px]">
            <h3 className={['', styles.context_title].join(' ')}>
              Simplified creation process
            </h3>
            <h4 className={['font-light opacity-80', styles.context].join(' ')}>
              To prevent the frivolous creation of numerous ERC-BTSs, we have
              set a minimum creation amount. The creator holds the ERC-BTS token
              and BTS LP tokens, which only represent their personal capital
              investment in the fund.
            </h4>
            <NextImage
              src="/images/bts-factory/bts.png"
              width={531}
              height={198}
              alt=""
              className="mt-[30px] w-full"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-[41px] mt-[70px] flex items-center justify-center px-5 lg:mb-[200px] lg:mt-[306px]">
        <Zoom>
          <div>
            <Image src={BtsBack} width={831} height={544} alt="bts-back" />
          </div>
        </Zoom>
      </div>
      {/* <MobileBtsFactory className="block md:hidden" /> */}
    </section>
  );
}
