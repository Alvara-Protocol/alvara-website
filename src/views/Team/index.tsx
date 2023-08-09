import Image from 'next/image';
import React from 'react';

import { Button, Hives } from '@/components';
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
        linkedin: 'https://www.linkedin.com/in/dominic-ryder-9024699a',
      },
      achievments: [
        <>
          Founder and CEO of{' '}
          <a
            href="https://www.vemp.xyz/"
            className="font-bold"
            target="_blank"
            rel="noreferrer"
          >
            VEMP Studios
          </a>{' '}
          Digital{' '}
        </>,
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
        linkedin: 'http://linkedin.com/in/takahashi-hiroyuki-930458276',
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
      designation: 'Lead Product Designer',
      photo: '/images/team/miha.png',
      links: {
        linkedin: 'https://www.linkedin.com/in/sodmi/',
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
        '20+ years experience in advising on traditional and alternative asset classes to institutional clients',
        'Extensive derivative trading and structuring experience including the creation of a range of ETFs',
        'Helping people make informed investment decisions using mathematical models and technology',
        'Incorporating climate aware scenario anaysis into strategic asset allocation decisions',
      ],
    },
  ];

  return (
    <main>
      <Hives className=" gap-10 px-4 pt-40 md:grid md:grid-cols-2  md:justify-between md:px-11">
        <div className="grid  content-center">
          <h1 className="mb-32 px-5 text-4xl  text-gray-400 md:mb-0 md:max-w-xs md:px-20 md:text-center md:text-6xl">
            About <p>Alvara</p>
          </h1>
        </div>
        <div className="mx-5 mb-10 md:mx-0">
          <p className=" leading-10  text-gray-300 md:max-w-2xl">
            The Alvara Protocol is a transformative platform in the DeFi space
            designed to democratise the world of fund management. Built on the
            newly developed ERC-BTS token standard, Alvara provides an
            innovative tokenised fund factory that paves the way for anyone to
            become a fund manager. This unique ecosystem maintains complete
            transparency, allowing other investors to confidently contribute to
            the fund. Alvara adds a new dimension to decentralised finance by
            revolutionising how we perceive and engage with fund management as
            managers and investors.
          </p>

          <div className="mb-5 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
          <UnstyledLink href="./alvara.pdf">
            <Button variant="primary" className="rounded-lg px-10 py-5">
              White Paper
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
          <h1 className="font-montserrat text-4xl font-medium  md:text-5xl">
            What makes Alvara so sweet?
          </h1>
          <div className="my-8 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
        <div className="hidden md:block"></div>
        <div className="">
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-black text-black">
              Construct and Launch.
            </h1>
          </div>
          <p className="px-7">
            With Alvara&apos;s BTS Factory, you can design and launch your own
            ERC-BTS and begin earning management fees based on your BTS’s total
            AUM.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              {' '}
              Verified Ownership.
            </h1>
          </div>
          <p className="px-7">
            Our integration with NFTs provides savvy fund managers with access
            to their fund&apos;s management rights and rewards structure. Using
            Alvara&apos;s BTS marketplace, fund managers can, for the first
            time, sell their business.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              Competitive Leaderboard.
            </h1>
          </div>
          <p className="px-7">
            Battle for top positions on Alvara&apos;s leaderboard alongside
            other fund managers and institutions. Track the strategies of the
            most profitable managers to mitigate your risk in the crypto
            markets.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">Yield Optimisation</h1>
          </div>
          <p className="px-7">
            Every ERC-BTS houses 100% collateralised underlying assets. These
            assets can be employed in non-custodial yield generation strategies
            through Alvara&apos;s partners. The rewards are cycled back into the
            fund to increase total AUM, or can be dispersed to contributors as
            rewards.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              Pioneering Advantage.
            </h1>
          </div>
          <p className="px-7">
            Alvara boasts the first-mover advantage, constructing the very first
            comprehensive protocol integrating a decentralised exchange,
            creation, and management portal. We are bringing tokenised funds to
            DeFi like never before.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-fuchsia-400"></div>
            <h1 className="text-xl font-bold text-black">
              {' '}
              Economical Transactions.
            </h1>
          </div>
          <p className="px-7">
            Alvara smart contracts purchase underlying assets through APIs
            linked to leading DEXs. This makes the costs of creating, redeeming,
            and rebalancing considerably cheaper than fully on-chain
            alternatives.
          </p>
        </div>
      </div>
      <div className="my-16 h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent"></div>
      <div className="grid place-content-center">
        <h1 className="text-center text-4xl text-black md:text-5xl">
          Alvara Team
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
