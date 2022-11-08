import React from 'react';

import { Hives, Info } from '@/components';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function Token() {
  return (
    <main>
      <Hives className="mb-20 flex w-full flex-col items-center">
        <div className="mx-4 flex max-w-2xl flex-col items-center gap-5 pt-[150px]">
          <h2 className="w-1/2 text-center font-montserrat font-medium uppercase tracking-widest">
            THE <span className="text-fuchsia-450">ALVA</span> TOKEN
          </h2>
          <div className="h-[2px] w-2/5 bg-gradient-to-r from-purple-650 to-transparent" />
          <p className="text-center">
            ALVA is the protocol&apos;s native token. It is an ERC-20 utility
            token has a maximum total supply of 200 million tokens.
            <br />
            <br />
            ALVA serves multiple functions within the platform, from fee
            reductions to portal access. Included in every SmartFund at a
            weighting of up to 5%, ALVA&apos;s circulating token supply is
            inherently deflationary, with buying pressure increasing each time a
            new SmartFund is launched.
            <br />
            <br />
            The full ALVA distribution and emission schedules can be found
            <UnderlineLink
              className="ml-2"
              href="https://docs.google.com/spreadsheets/d/1RUSn39an455ohStdlq5UdZf2laCgPX7Qadn9UEpdOjQ/edit#gid=1379240481"
              openNewTab
            >
              here.
            </UnderlineLink>
          </p>
        </div>
      </Hives>
      <div className="container mx-auto my-8 grid grid-cols-1 items-center justify-center gap-8 px-8 md:grid-cols-[repeat(3,minmax(250px,300px))] md:px-32">
        <Info
          image="/images/token/fee.svg"
          title="Fee Reductions"
          description="All platform fees paid using the ALVA token will attract a 25% fee reduction."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/income.svg"
          title="Passive Income"
          description="An equivalent 10% of all transaction fees will be gift-airdropped to ALVA holders on a monthly basis, weighted according to their holdings."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/burn.svg"
          title="Buy Back + Burn"
          description="5% of all platform fees will go into the ALvara Buy Back and Burn Program. Fees taken as ALVA will be burned automatically; fees taken as stable coin will be used to buyback ALVA and then burn it."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/asset.svg"
          title="Underlying Asset"
          description="Up to 5% of every SmartFund listed on the platform will comprise ALVA purchased from the open market."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/stake.svg"
          title="Staking"
          description="Alvara’s staking platform rewards stakers with a lucrative 12.5% APR."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/farm.svg"
          title="Farming"
          description="Third party farming platforms will reward ALVA liquiity providers for bolstering ALVAs DEX pools."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/access.svg"
          title="Portal Access"
          description="ALVA is the key to the SmartFund design portal and will give priority access to whitelists for every new fund launch."
          type={1}
          imageClassName="w-8 h-8"
        />
        <Info
          image="/images/token/bee.svg"
          title="Fees for Bees"
          description="The Alvara Foundation has been established to help fight for our world’s declining bee and pollinating insect populations. 5% of all platform fees will go straight into the Foundation’s treasury."
          type={1}
          imageClassName="w-8 h-8"
        />
      </div>
    </main>
  );
}
