import React from 'react';

import { Hives } from '@/components';

import Back from '@/views/BTSFactory/Back';
import MobileBtsFactory from '@/views/BTSFactory/MobileBtsFactory';

export default function Intro() {
  return (
    <section className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-col items-center gap-10 px-4  pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl leading-normal  text-gray-400 md:text-[60px]">
            BTS Factory
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-8 text-base leading-10 md:grid-cols-1 md:px-48 md:leading-6">
        Alvara&apos;s BTS Factory is the backbone of the Protocol, creating a
        platform for the birth of decentralised, meritocratic, tokenised
        investment funds. It brings all the crucial elements together, fostering
        mass acceptance of this novel ERC-BTS token technology. <br />
        <br />
        The Factory guides users through designing and launching their tokenised
        funds on the blockchain. It&apos;s flexible, supporting tokens from any
        blockchain, making it a trailblazer in cross-chain fund creation.
        <br />
        <br /> Fund creation is as easy as connecting a compatible web3 wallet,
        such as Metamask or Trust Wallet, adding the token contracts of your
        chosen assets, and naming and branding your ERC-BTS. Minting your
        ERC-BTS simply requires a minimum contribution of 1 ETH (or equivalent).{' '}
        <br />
        <br />
        To maintain the integrity of the system and avoid superfluous fund
        creation, we&apos;ve set a minimum contribution. Fund creators hold the
        ERC-BTS token and BTS LP tokens, reflecting their personal investment in
        the fund. Despite the creator holding the ERC-BTS token, the underlying
        assets remain non-custodial. <br />
        <br />
        The end product is a safely and securely stored fund within a smart
        contract. <br />
        <br />
        Our Factory also facilitates the creation (minting) of new BTS LP
        tokens, which are valued at the net asset value (NAV) of the underlying
        assets within that BTS. <br />
        <br />
        The total cost for minting a new BTS is set at 1%, which includes a 0.5%
        Alvara platform fee as well as a 0.5% $ALVA “buy and burn” event. The
        same costs apply for both contributing to and redeeming from an existing
        BTS.
        <br />
        <br />
        The Alvara Protocol&apos;s ERC-BTS Factory is an open gateway for
        everyone to explore the advantages of tokenised investment funds on the
        blockchain.
        <br />
        <br />{' '}
        <div>
          If you have any questions, we invite you to join our{' '}
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
          server where our dedicated team will gladly assist you.
        </div>
      </div>
      <div className="hidden md:block">
        <Back />
      </div>
      <MobileBtsFactory className="block md:hidden" />
    </section>
  );
}
