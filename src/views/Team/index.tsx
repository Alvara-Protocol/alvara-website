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
        <div className=" pt-[150px] text-center">
          <h2 className="text-center font-montserrat font-medium uppercase tracking-widest">
            Alvara teams
          </h2>
          <div className="mx-auto mt-5 h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
        </div>
      </Hives>
      <section className="container mx-auto mt-32 mb-10 grid grid-cols-4 gap-x-10 gap-y-16 ">
        {members.map((member, i) => (
          <Member key={i} {...member} />
        ))}
      </section>
    </main>
  );
}
