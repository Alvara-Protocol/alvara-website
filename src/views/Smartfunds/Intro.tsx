import React from 'react';

import { Button, Hives, Info } from '@/components';

export default function Intro() {
  return (
    <section className="flex flex-col gap-28 bg-gray-400 pb-20">
      <Hives className="flex flex-row items-center justify-around px-11 pt-[250px]">
        <h1 className="text-center text-[60px] leading-normal">
          Smart <br />
          funds.
        </h1>
        <div className="flex w-1/2 max-w-[600px] flex-col gap-10">
          <p className="font-poppins text-[20px] font-light tracking-widest">
            Welcome visitors to your site with a short, engaging introduction.
            Double click to edit and add your own text. honeycomb
          </p>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
      </Hives>
      <div className="container mx-auto grid grid-cols-4 px-20">
        <Info
          image="/images/smart-funds/build.png"
          title="Build your Own"
          description="Describe the item and include any relevant details. Click to edit the text"
          size={114}
        />
        <Info
          image="/images/smart-funds/proof.png"
          title="Proof of Ownership"
          description="Describe the item and include any relevant details. Click to edit the text"
          size={114}
        />
        <Info
          image="/images/smart-funds/leaderboard.png"
          title="Advanced leaderboard"
          description="Describe the item and include any relevant details. Click to edit the text"
          size={114}
        />
        <Info
          image="/images/smart-funds/join.png"
          title="Join the Hive"
          description="Describe the item and include any relevant details. Click to edit the text"
          size={114}
        />
      </div>
    </section>
  );
}
