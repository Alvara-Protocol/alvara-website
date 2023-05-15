import Image from 'next/image';
import React from 'react';

import { Button, Hives, Seo } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Member, { MemberProps } from './components/Member';

export default function Team() {
  const members: MemberProps[] = [
    {
      name: 'Callum Mitchell-Clark',
      designation: 'Co-founder',
      photo: '/images/team/callum.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/callum-mitchell-clark-05183536',
      },
      achievments: [
        '10+ years business owner and management experience',
        'Project Management, Marketing, Consumer Psychology and Legal experience',
        'Served on management teams for several crypto startups',
        'Crypto + DeFi Enthusiast and Investor',
        'Blockchain infrastructure support experience',
      ],
    },
    {
      name: 'Dominic Ryder',
      designation: 'Co-founder',
      photo: '/images/team/dominic.png',
      links: {
        linkedin:
          'https://www.linkedin.com/in/dominic-mitchell-clark-0b9155217',
      },
      achievments: [
        'Founder and CEO of vEmpire Digital ',
        "Experienced Senior Derivatives Trader and Head of Desk; partner at FTSE100 London-based wealth management firm- St James' Place",
        'Anarchist at heart and strong advocate for decentralization',
        'One of the largest Metaverse real estate managers',
      ],
    },
    {
      name: 'Max Green',
      designation: 'Lead Marketing & PR',
      photo: '/images/team/max.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/max-green-377789225',
      },
      achievments: [
        'Experienced Marketing Technologist with specific expertise in Strategic Campaign Management',
        'Strong background in CRM, QA, Project and Database Management, Analytics & Compliance',
        'Managed global strategic campaigns for Fortune 500 companies creating unified processes, governance and structure',
      ],
    },
    {
      name: 'Joey van Etten',
      designation: "Founder's Associate",
      photo: '/images/team/joe.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/joey-van-etten-12b228184',
      },
      achievments: [
        '6+ years experience in TradFi and DeFi',
        'Strong industry expertise with a passion for building relationships',
        'Extensive experience in networking and strategy inside crypto space',
        'Early adopter and investor of various major cryptocurrencies',
        'Responsible for researching and connecting strategic partnerships',
      ],
    },
    {
      name: 'Takahashi Hiroyuki',
      designation: 'Lead Blockchain Developer',
      photo: '/images/team/taka.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/hiroyuki-takahashi-7aa34a221',
      },
      achievments: [
        'Highly experienced full-stack web and blockchain developer, specializing in Solidity, Rust, Python and Javascript',
        'Extensive experience integrating front and back end using web3',
        'Highly motivated with impressive work experience amongst leading blockchain and fortune500 companies',
        'Expert knowledge developing ERC20, ERC721, DEX and exchange platforms',
      ],
    },

    {
      name: 'Miha Sodja',
      designation: 'GOAT Designer',
      photo: '/images/team/miha.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/mihasodja',
      },
      achievments: [
        '10 years of graphic design experience including working for Fortune 500 companies',
        'Extensive experience in creating advanced research based UI/UX',
        'Top Rated Plus status on Upwork (top 3%)',
        'Strong background in marketing and digital advertising',
      ],
    },
    {
      name: 'Hicham Elgouraid',
      designation: 'Graphic Designer',
      photo: '/images/team/hicham.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/hicham-elgouraid-b777891b2',
      },
      achievments: [
        '6+ years of Graphic Design experience',
        'Responsible for product strategy as well as designing user interfaces and user experience.',
        'Extensive knowledge in HTML /CSS',
        'Experienced Webflow Developer',
      ],
    },
    {
      name: 'Deon Dreyer',
      designation: 'ETF Advisor',
      photo: '/images/team/deon.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/deon-dreyer',
      },
      achievments: [
        'Experienced product development with a demonstrated history of working in the financial services industry.',
        'Skilled in FX spot, trading strategies, Java, Borland Delphi, and Foreign Exchange (FX) trading.',
        'Strong product management professional with a Level 2 professional degree focused on financial management from University of Latvia.',
      ],
    },
  ];

  return (
    <main>
      <Seo templateTitle="Team" description="Alvara team" />
      <Hives className=" gap-10 px-4 pt-40 md:grid md:grid-cols-2  md:justify-between md:px-11">
        <div className="grid  content-center">
          <h1 className="mb-32 px-5 text-4xl uppercase text-gray-400 md:mb-0 md:max-w-xs md:px-20 md:text-center md:text-6xl">
            About <p>Alvara.</p>
          </h1>
        </div>
        <div className="mx-5 mb-10 md:mx-0">
          <p className=" leading-10  text-gray-300 md:max-w-2xl">
            ERC-BTS is the name for our new token standard that&apos;ll allow
            users to create tokenised crypto funds. Unleashing the full
            capabilities of the blockchain to offer investors the world&apos;s
            most popular investment vehicle.
            <br />
            <br /> Basket funds are number one for a reason - they provide a low
            risk, low cost, diversified and transparent investment opportunity.
            For the first time, that opportunity is available to anyone. Only
            with Alvara.
          </p>
          <div className="mb-5 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          <UnstyledLink href="https://alvaraprotocol.medium.com">
            <Button variant="primary" className="rounded-lg py-5 px-10">
              Read More
            </Button>
          </UnstyledLink>
        </div>
        <div className="col-span-2 mb-16 px-5 text-gray-300 md:px-24">
          <div className="grid gap-5 md:grid-cols-4 ">
            <div className="grid grid-rows-3 place-items-center items-start gap-5 text-center">
              <div className="w-20">
                <Image
                  className="mb-4 rounded-full"
                  src="/images/aboutAlva/aboutAlva-3.png"
                  layout="responsive"
                  width={10}
                  height={10}
                  alt="row risk"
                />
              </div>
              <h1 className="text-2xl text-gray-400">Low Risk</h1>
              <p className="-mt-10 text-sm">
                Risk is spread through investing in multiple assets and asset
                classes.
              </p>
            </div>
            <div className="grid grid-rows-3 place-items-center items-start gap-5 text-center">
              <div className="w-20">
                <Image
                  className="mb-4 rounded-full"
                  src="/images/aboutAlva/aboutAlva-4.png"
                  layout="responsive"
                  width={10}
                  height={10}
                  alt="row cost"
                />
              </div>
              <h1 className="text-2xl text-gray-400">Low Cost</h1>
              <p className="-mt-10 text-sm">
                Management and operating expenses lower than other investment
                vehicles.
              </p>
            </div>
            <div className="grid grid-rows-3 place-items-center items-start gap-5 text-center ">
              <div className="w-20">
                <Image
                  className="mb-4 rounded-full"
                  src="/images/aboutAlva/aboutAlva-1.png"
                  layout="responsive"
                  width={10}
                  height={10}
                  alt="transparent"
                />
              </div>
              <h1 className="text-2xl text-gray-400">Transparent</h1>
              <p className="-mt-10 text-sm">
                A funds holdings and weightings are disclosed publicly and
                regularly.
              </p>
            </div>
            <div className="grid grid-rows-3 place-items-center items-start gap-5 text-center">
              <div className="w-20">
                <Image
                  className="mb-4 rounded-full"
                  src="/images/aboutAlva/aboutAlva-2.png"
                  layout="responsive"
                  width={10}
                  height={10}
                  alt="diversification"
                />
              </div>
              <h1 className="text-2xl text-gray-400">Diversification</h1>
              <p className="-mt-10 text-sm">
                ERC-BTS offer instant diversification through exposure to a
                basket of underlying assets.
              </p>
            </div>
          </div>
        </div>
      </Hives>
      <div className="grid gap-10 p-10 leading-10 md:grid-cols-2 md:p-20">
        <div>
          <h1 className="font-montserrat text-4xl font-medium uppercase md:text-5xl">
            What makes Alvara so sweet?
          </h1>
          <div className="my-8 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
        <div className="hidden md:block"></div>
        <div className="">
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-base font-black text-black">Build Your Own.</h1>
          </div>
          <p className="px-7">
            Design and launch your own ERC-BTS via Alvara&apos;s BTS Factory.
            Earn rewards each time your fund&apos;s are traded on the HiveX.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">Yield Generation.</h1>
          </div>
          <p className="px-7">
            Every ERC-BTS contains 100% collateralised underlying assets. These
            assets are utilized in yield generation strategies via our partners,
            with the rewards being fed back into the fund and distributed to
            share holders as dividends.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              Proof of Ownership.
            </h1>
          </div>
          <p className="px-7">
            NFT integration provides smart fund managers with a key to their
            fund&apos;s management rights and rewards structure. Transferable at
            Alvara&apos;s NFT marketplace, fund managers can, for the first
            time, sell their business.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              First Mover Advantage.
            </h1>
          </div>
          <p className="px-7">
            Alvara has first mover advantage, building the very first one-stop
            protocol with a decentralised exchange, creation and management
            portal. Bringing tokanised funds to DeFi like never before.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              Advanced Leaderboard.
            </h1>
          </div>
          <p className="px-7">
            Compete against your fellow fund managers for top ranking positions
            on Alvara&apos;s leaderboard. Follow the most profitable fund
            managers to minimise your risk exposure to the crypto markets.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">Low Cost.</h1>
          </div>
          <p className="px-7">
            Underlying assets are purchased through APIs linked to leading DEXs,
            making the costs of creating, redeeming and rebalancing much cheaper
            than fully on-chain alternatives.
          </p>
        </div>
      </div>
      <div className="my-16 h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
      <div className="grid place-content-center">
        <h1 className="text-center text-4xl text-black md:text-5xl">
          ALVARA TEAM
        </h1>
        <div className="my-16 h-[2px] w-72 place-self-center bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
      </div>
      <section className="container mx-auto px-8 md:px-16">
        <div className=" mb-32 grid grid-cols-1 items-start gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, i) => (
            <Member key={i} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
}
