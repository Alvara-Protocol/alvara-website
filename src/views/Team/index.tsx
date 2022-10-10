import React from 'react';

import { Hives } from '@/components';

import Member, { MemberProps } from './components/Member';

export default function Team() {
  const members: MemberProps[] = [
    {
      name: 'Ashley Jones',
      designation: 'Art Director',
      photo: '/images/team/default.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Ashley Jones',
      designation: 'Art Director',
      photo: '/images/team/default.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Ashley Jones',
      designation: 'Art Director',
      photo: '/images/team/default.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Ashley Jones',
      designation: 'Art Director',
      photo: '/images/team/default.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
    },
    {
      name: 'Ashley Jones',
      designation: 'Art Director',
      photo: '/images/team/default.png',
      links: {
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <main>
      <Hives className="flex w-full flex-col items-center">
        <div className="flex max-w-[560px] flex-col items-center gap-12 pt-[150px]">
          <h2 className=" w-1/2 text-center font-montserrat font-medium uppercase tracking-widest">
            Alvara teams
          </h2>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p>
            Why is the exchange so good? looks nice, easy to use, web3 - link
            metamask, secure, ability to trade ETFs, ability to build (only
            place to build), facilitate onboarding with HiveMind trading. Add a
            general description of the items listed below. You can introduce the
            list and include any relevant information you want to share. Double
            click to edit the text.
          </p>
        </div>
      </Hives>
      <section className="container mx-auto flex flex-wrap items-center justify-center gap-x-28 gap-y-20 p-20">
        {members.map((member, i) => (
          <Member key={i} {...member} />
        ))}
      </section>
    </main>
  );
}
