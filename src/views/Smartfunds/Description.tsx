import React from 'react';

export default function Description() {
  return (
    <section className="container mx-auto flex flex-col gap-6 px-20 py-24">
      <h2>
        What makes Alvara
        <br />
        so sweet?
      </h2>
      <div className="h-[4px] w-1/2 bg-gradient-to-r from-purple-650 to-transparent"></div>
      <ul className="intro grid grid-cols-2 gap-x-[10rem] gap-y-12">
        <li>
          <b>Build Your Own.</b>
          <br /> Design and launch your own Crypto Smart Fund via Alvara&apos;s
          creation portal. Earn rewards each time your fund&apos;s shares are
          traded on the HiveX.
        </li>
        <li>
          <b>Yield Generation.</b>
          <br />
          Every smart fund contains 100% collateralized underlying assets. These
          assets are utilized in yield generation strategies via our partners,
          with the rewards being fed back into the fund and distributed to share
          holders as dividends.
        </li>
        <li>
          <b>Proof of Ownership.</b>
          <br />
          NFT integration provides smart fund managers with a key to their
          fund&apos;s management rights and rewards structure. Transferable at
          Alvara&apos;s NFT marketplace, fund managers can, for the first time,
          sell their business.
        </li>
        <li>
          <b>First Mover Advantage.</b>
          <br />
          Alvara has first mover advantage, building the very first one-stop
          protocol with a hybridized exchange, creation and management portal.
          Bringing ETFs to DeFi like never before.
        </li>
        <li>
          <b>Advanced Leaderboard.</b>
          <br />
          Compete against your fellow fund managers for top ranking positions on
          Alvara&apos;s leaderboard. Follow the most profitable fund managers to
          minimize your risk exposure to the crypto markets.
        </li>
        <li>
          <b>Low Cost.</b>
          <br />
          Underlying assets are purchased through APIs linked to leading CEXs,
          making the costs of creating, redeeming and rebalancing much cheaper
          than fully on-chain alternatives.
        </li>
      </ul>
    </section>
  );
}
