import React from 'react';

import { Hives } from '@/components';

import Member, { MemberProps } from './components/Member';

export default function Team() {
  const members: MemberProps[] = [
    {
      name: 'Callum Mitchell-Clark',
      designation: 'CEO',
      photo: '/images/team/callum.png',
      links: {
        linkedin: 'https://linkedin.com',
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
      name: 'Jay Grant',
      designation: '(Acting) CTO',
      photo: '/images/team/james.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '10+ years active in the blockchain space with involvement in the early days of LTC',
        'Developed a number of solutions in the commercial property space to assist with in-depth demographic analysis and subsequently acquisitions',
        'Overseeing the planning, structure and development of the upcoming ETFX platform',
      ],
    },
    {
      name: 'Max Green',
      designation: 'CMO',
      photo: '/images/team/max.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        'Experienced Marketing Technologist with specific expertise in Strategic Campaign Management',
        'Strong background in CRM, QA, Project and Database Management, Analytics & Compliance',
        'Managed global strategic campaigns for Fortune 500 companies creating unified processes, governance and structure',
      ],
    },
    {
      name: 'Takahashi Hiroyuki',
      designation: 'Lead Blockchain Developer',
      photo: '/images/team/taka.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        'Highly experienced full-stack web and blockchain developer, specializing in Solidity, Rust, Python and Javascript',
        'Extensive experience integrating front and back end using web3',
        'Highly motivated with impressive work experience amongst leading blockchain and fortune500 companies',
        'Expert knowledge developing ERC20, ERC721, DEX and exchange platforms',
      ],
    },

    {
      name: 'Gunars Kepe',
      designation: 'HiveX Project Manager',
      photo: '/images/team/gunars.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Miha Sodja',
      designation: 'GOAT Designer',
      photo: '/images/team/miha.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Hicham Elgouraid',
      designation: 'Graphic Designer',
      photo: '/images/team/hicham.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Joe',
      designation: 'Community Lead',
      photo: '/images/team/joe.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '6+ years experience in TradFi and DeFi ',
        'Strong industry expertise with a passion for building relationships ',
        'Experienced community lead ',
        'Early adopter and investor of various major cryptocurrencies ',
        'Responsible for guarding the connection between team and community',
      ],
    },
  ];

  const advisors: MemberProps[] = [
    {
      name: 'Neil Mitchell-Clark',
      designation: 'Chief Advisor',
      photo: '/images/team/neil.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Deon Dreyer',
      designation: 'ETF Advisor',
      photo: '/images/team/deon.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Peter Arnold',
      designation: 'Compliance Advisor',
      photo: '/images/team/peter.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
    {
      name: 'Dominic Ryder',
      designation: 'Blockchain and Metaverse Advisor',
      photo: '/images/team/dominic.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '8 years experience in creative digital content',
        'Project manager for a variety of content marketing campaigns',
        'Spanned the roles from writer to editor to manager',
        'Self-taught Web Development and SEO',
      ],
    },
  ];

  return (
    <main>
      <Hives className="flex w-full flex-col items-center">
        <div className=" pt-[150px] text-center">
          <h2 className="text-center font-montserrat font-medium uppercase tracking-widest">
            Alvara teams
          </h2>
          <div className="mx-auto mt-5 h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>

          <p className="mt-10 max-w-xl">
            Why is the exchange so good? looks nice, easy to use, web3 - link
            metamask, secure, ability to trade ETFs, ability to build (only
            place to build), facilitate onboarding with HiveMind trading.
          </p>
        </div>
      </Hives>
      <section className="container mx-auto mt-32 mb-32 grid grid-cols-4 items-start gap-x-10 gap-y-16 ">
        {members.map((member, i) => (
          <Member key={i} {...member} />
        ))}
      </section>

      <div className="container mx-auto text-center text-[65px]">Advisors</div>
      <section className="container mx-auto mt-32 mb-16 grid grid-cols-4 items-start gap-x-10 gap-y-16 ">
        {advisors.map((member, i) => (
          <Member key={i} {...member} />
        ))}
      </section>
    </main>
  );
}
