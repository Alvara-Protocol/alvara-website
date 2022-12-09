import React from 'react';

import { NextImage } from '@/components';

import Hexagon from './Hexagon';

const roadMapContent = [
  {
    title: 'Q2-Q4 20222',
    contents: [
      'Project Development',
      'ALVA Contract Development',
      'Whitepaper Release',
      'Alvara Socials',
      'Seed Round',
      'Smart Contract Audits',
    ],
  },
  {
    title: 'Q1-2023',
    contents: [
      'Seed Round cont',
      'Licensing Applications',
      'Strategic Partnerships',
    ],
  },
  {
    title: 'Q2-2023',
    contents: [
      'Series A Private Round',
      'Series B Public Round and IDO',
      'ALVA TGE',
      'CEX Listings',
    ],
  },
  {
    title: 'Q3-2023',
    contents: [
      'Licensing Approval',
      'Platform Testing',
      'Staking Platform Launch',
      'NFT Development',
      'ETF Development',
    ],
  },
  {
    title: 'Q4-2023',
    contents: [
      'Beta testing',
      'V1 HiveX Launch',
      'Alvara Spot ETF Listings',
      'Fiat Gateway',
    ],
  },
  {
    title: 'Q1-2024',
    contents: [
      'V2 HiveX Launch',
      'Alvara Hive Social Platform',
      'Leveraged ETFs',
    ],
  },

  {
    title: 'Q2-2024',
    contents: [
      'Mobile App Development',
      'Traditional Finance Expansion',
      'Tokenized Equity & Commodity ETFs',
    ],
  },
];

export default function Timeline2() {
  return (
    <div className="my-20">
      <div className=" flex w-full flex-col items-center justify-center gap-4 xl:-mb-20 xl:flex-row">
        <div className="hex-up-disabled gradient-border -mb-12 -translate-x-1/2 xl:mb-0 xl:translate-x-0">
          <NextImage
            className="absolute top-1/2 left-1/2 m-auto -translate-y-1/2 -translate-x-1/2 opacity-50"
            src="/images/logo.png"
            width={120}
            height={120}
            alt="Alvara"
          />
        </div>
        <div className="hex-up-disabled gradient-border hidden opacity-0 hover:cursor-default xl:block" />
        <div className="hex-up-disabled gradient-border hidden xl:block" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 xl:-mb-20 xl:flex-row">
        <Hexagon direction="up" {...roadMapContent[0]} />
        <Hexagon direction="up" {...roadMapContent[1]} />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 xl:-mb-20 xl:flex-row">
        <Hexagon direction="up" {...roadMapContent[2]} />
        <Hexagon direction="up" {...roadMapContent[3]} />
        <Hexagon direction="up" {...roadMapContent[4]} />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 xl:-mb-20 xl:flex-row">
        <Hexagon direction="down" {...roadMapContent[5]} />
        <Hexagon direction="down" {...roadMapContent[6]} />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 xl:flex-row">
        <div className="hex-down-disabled gradient-border hidden xl:block" />
        <div className="hex-down-disabled gradient-border hidden opacity-0 hover:cursor-default xl:block" />
        <div className="hex-down-disabled gradient-border -mt-12 translate-x-1/2 xl:mt-0 xl:translate-x-0">
          <NextImage
            className="absolute top-1/2 left-1/2 m-auto -translate-x-1/2 -translate-y-1/2 opacity-50"
            src="/images/logo.png"
            width={120}
            height={120}
            alt="Alvara"
          />
        </div>
      </div>
    </div>
  );
}
