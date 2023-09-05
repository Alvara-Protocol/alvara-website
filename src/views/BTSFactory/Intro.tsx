import React from 'react';

import { Hives } from '@/components';
import ImageWithModal from '@/components/ImageWithModal';

import MobileBtsFactory from '@/views/BTSFactory/MobileBtsFactory';
import ProcessImage from '@/views/BTSFactory/ProcessImage';

import BtsBack from '~/images/bts-back.png';

export default function Intro() {
  return (
    <section className=" flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl leading-normal  text-gray-400 md:text-[60px]">
            BTS Factory
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container  mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-12 md:leading-6 lg:px-48 ">
        <div className="grid">
          <h1 className="text-4xl font-medium text-[#131531]">
            Revolutionary Technology
          </h1>
          <div className=" mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent md:w-96"></div>
        </div>
        <p>
          An ERC-BTS is our basket token standard, allowing users to pull a
          collection of assets, across different chains into a single,
          manageable public fund. Enabling users to showcase their skills within
          crypto markets or take advantage of other skilled traders by
          contributing to their fund. <br />
          <br />
          Our ERC-BTS Factory is the primary architectural arm of the protocol.{' '}
          <br />
          <br />
          The ERC-BTS Factory enables users to design and deploy brand new
          tokenised funds on the blockchain. Tokens from any blockchain are
          supported, allowing for a first of its kind cross-chain fund creation.
        </p>
        <div className="grid">
          <h1 className="text-4xl font-medium text-[#131531]">
            Simplified Creation Process
          </h1>
          <div className=" mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent md:w-96"></div>
        </div>
        <div className="flex flex-col items-center lg:flex-row ">
          <p>
            Connect a compatible web3 wallet (such as Metamask or Trust Wallet).
            <br />
            <br />
            Add the token you would like to include in your basket. These can be
            tokens across different chains and soon, NFTs too.
            <br />
            <br /> Allocate the percentage weighting of your chosen assets. You
            can also set this to auto rebalance every month. What is
            rebalancing?
            <br />
            <br />
            Name your ERC-BTS and upload its logo. Be creative and inviting to
            potential contributors, be descriptive to show them how you
            allocate.
            <br />
            <br /> The ERC-BTS can now be minted by making a minimum
            contribution of 1 ETH (or equivalent in any currency).{' '}
          </p>
          <ProcessImage className="h-full" />
        </div>
        <div className="grid">
          <h1 className="text-4xl font-medium text-[#131531]">Fee Structure</h1>
          <div className=" mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent md:w-96"></div>
        </div>
        To prevent the frivolous creation of numerous ERC-BTSs, we have set a
        minimum creation amount. The creator holds the ERC-BTS token and BTS LP
        tokens, which only represent their personal capital investment in the
        fund. Although the ERC-BTS token is held by the fund creator, the
        underlying assets themselves are non-custodial. The end result is safe
        storage within the security of a smart contract. <br />
        <br />
        The creation mechanism enables users to create (mint) new BTS LP tokens
        at the net asset value (NAV) of the underlying assets of any ERC-BTS
        created on our protocol. Users pay all gas fees associated and a 0.5%
        fee is charged by the Alvara Foundation each time a user creates new BTS
        LP tokens in a fund.
        <br />
        <br />
        The total cost of initial creation of a new ERC-BTS is 1%.
        <br />
        <br /> During the minting process, a 0.5% fee is charged by the Alvara
        Foundation, and an additional 0.5% is used to buy and burn ALVA. During
        both the contribution and redemption processes, a 0.5% fee is charged by
        the Alvara Foundation.
        <br />
        <br /> Everyone can experience the benefits of tokenised investment
        funds on the blockchain with Alvara Protocol&apos;s ERC-BTS Factory.
        <br />
        <br />
        The Alvara Protocol&apos;s ERC-BTS Factory is an open gateway for
        everyone to explore the advantages of tokenised investment funds on the
        blockchain.
        <br />
        <div>
          If you have any queries, be sure to join our{' '}
          <a
            className=" underline "
            target="_blank"
            rel="noreferrer"
            href="http://discord.gg/pHDDF2MS8v"
          >
            Discord
          </a>{' '}
          server where a member of our dedicated team will be on hand to provide
          assistance.
        </div>
      </div>
      <div className="hidden md:block">
        {/* <Back /> */}
        <ImageWithModal src={BtsBack} alt="bts-back" width={831} height={544} />
      </div>
      <MobileBtsFactory className="block md:hidden" />
    </section>
  );
}
