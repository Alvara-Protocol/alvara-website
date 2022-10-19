import React from 'react';

import { Hives, Seo } from '@/components';

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
      designation: 'Product Manager',
      photo: '/images/team/james.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '10+ years active in the blockchain space with involvement in the early days of LTC',
        'Developed a number of solutions in the commercial property space to assist with in-depth demographic analysis and subsequently acquisitions',
        'Overseeing the planning, structure and development of the upcoming HiveX platform',
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
        'Experienced product development with a demonstrated history of working in the financial services industry.',
        'Skilled in FX spot, trading strategies, Java, Borland Delphi, and Foreign Exchange (FX) trading.',
        'Strong product management professional with a Level 2 professional degree focused on financial management from University of Latvia.',
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
        linkedin: 'https://linkedin.com',
      },
      achievments: [
        '6+ years of Graphic Design experience',
        'Responsible for product strategy as well as designing user interfaces and user experience.',
        'Extensive knowledge in HTML /CSS',
        'Experienced Webflow Developer',
      ],
    },
    {
      name: 'Joey van Etten',
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
        'Responsible for managing the connection between team and community',
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
        '20+ years senior executive experience in sales oriented, B2B, financial services, distribution and logistics organisations',
        '15 years professional experience with Arthur Andersen and Coopers and Lybrand in England, The Netherlands, Australia and Asia',
        'M&A, Capital and debt raising, IPO’s, Business Transformation and Strategy Formulation',
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
        '20+ years experience in advising on traditional and alternative asset classes to institutional clients',
        'Extensive derivative trading and structuring experience including the creation of a range of ETFs',
        'Helping people make informed investment decisions using mathematical models and technology',
        'Incorporating climate aware scenario analysis into strategic asset allocation decisions',
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
        '30+ years’ working in Australia’s commercial, industrial and retail property markets specialising in the area of Funds Management',
        'Co-founded Austgrowth Property Syndicates Limited',
        'Board Member of a number of Funds Management businesses',
        'Extensive experience in funds management, financial modelling, finance and asset management across all property sectors',
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
        'Founder and CEO of vEmpire Digital',
        "Experienced Senior Derivatives Trader and Head of Desk; partner at FTSE100 London-based wealth management firm - St James' Place",
        'Anarchist at heart and strong advocate for decentralization',
        'One of the largest Metaverse real estate managers',
      ],
    },
  ];

  return (
    <main>
      <Seo templateTitle="Team" description="Alvara team" />
      <Hives className="flex w-full flex-col items-center">
        <div className="pt-[150px] text-center">
          <h2 className="px-8 text-center font-montserrat font-medium uppercase tracking-widest">
            Core team
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-full bg-gradient-to-r from-purple-650 to-transparent" />
        </div>
      </Hives>
      <section className="container mx-auto px-8 md:px-16">
        <div className="mt-32 mb-32 grid grid-cols-1 items-start gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, i) => (
            <Member key={i} {...member} />
          ))}
        </div>
        <h2 className="text-center font-montserrat font-medium uppercase tracking-widest">
          Advisors
        </h2>
        <div className="mx-auto mt-5 h-[2px] w-1/5 bg-gradient-to-r from-purple-650 to-transparent" />
        <div className="mt-32 mb-16 grid grid-cols-1 items-start gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {advisors.map((member, i) => (
            <Member key={i} {...member} />
          ))}
        </div>
      </section>
    </main>
  );
}
