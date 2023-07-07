import React from 'react';

import { Hives } from '@/components';

import MobileBtsFactory from '@/views/BTSFactory/MobileBtsFactory';

export default function Intro() {
  return (
    <section className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
            BTS Factory
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
        Our ERC-BTS Factory is the primary architectural arm of the protocol.
        <br />
        <br />
        It&apos;s the infrastructure for the creation of decentralised,
        meritocratic, tokenised investment funds, providing all the critical
        components needed to ensure mass adoption of our new ERC-BTS token
        technology. <br />
        <br />
        The ERC-BTS Factory enables users in designing and deploying brand new
        tokenised funds on the blockchain.
        <br />
        <br /> Tokens from any blockchain are supported, allowing for a first of
        its kind cross-chain fund creation.
        <br /> The creation process is simple - connect a compatible web3 wallet
        (such as Metamask or Trust Wallet), add the token contracts of the
        underlying assets, name your ERC-BTS and upload its logo. The ERC-BTS
        can now be minted by making a minimum contribution of 1 ETH (or
        equivalent in any currency).
        <br />
        <br /> In a move to prevent the frivolous creation of numerous ERC-BTSs,
        we have set a minimum contribution amount. The creator holds the ERC-BTS
        token and BTS LP tokens, which only represent their personal capital
        investment in the fund. Although the ERC-BTS token is held by the fund
        creator, the underlying assets themselves are non-custodial. <br />
        <br />
        The end result is safe and secure storage within the confines of a smart
        contract. <br />
        <br />
        The creation mechanism enables users to create (mint) new BTS LP tokens
        at the net asset value (NAV) of the underlying assets of any ERC-BTS
        created on our protocol.
        <br />
        <br /> Users pay all gas fees associated and a 0.5% fee is charged by
        the Alvara Foundation each time a user creates new BTS LP tokens in a
        fund. <br />
        <br />
        The total cost of initial creation of a new ERC-BTS is 1%, which
        incorporates a 0.5% + any associated gas fees.
        <br />
        <br /> During the minting process, a 0.5% fee is charged by the Alvara
        Foundation, and an additional 0.5% is used to buy and burn ALVA. <br />
        During both the creation and redemption processes, a 0.5% fee is charged
        by the Alvara Foundation.
        <br />
        <br /> Everyone can experience the benefits of tokenised investment
        funds on the blockchain with Alvara Protocol&apos;s ERC-BTS Factory.{' '}
        <br />
        <br />
        If you have any queries, be sure to join our Discord server where a
        member of our dedicated team will be on hand to provide assistance.
      </div>
      <div className="hidden h-[1262px] w-full bg-[url('/images/bts-factory/back.svg')] bg-cover bg-center bg-no-repeat md:block"></div>
      <MobileBtsFactory className="block md:hidden" />
    </section>
  );
}
