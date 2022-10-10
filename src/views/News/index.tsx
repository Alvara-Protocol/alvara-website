import React from 'react';

import { Hives, Info } from '@/components';

export default function News() {
  return (
    <main>
      <Hives className="flex w-full flex-col items-center">
        <div className="flex max-w-[560px] flex-col items-center gap-12 pt-[150px]">
          <h2 className=" w-1/2 text-center font-montserrat font-medium uppercase tracking-widest">
            News.
          </h2>
          <div className="h-[2px] w-3/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p>Press release, medium articles and links to Alvara socials</p>
        </div>
      </Hives>
      <section className="container mx-auto grid grid-cols-7 items-center justify-center gap-x-28 gap-y-20 p-20">
        <Info
          image="/images/social/telegram.png"
          title="Telegram"
          description="t.me/alvara"
        />
        <div className="bg-gradient h-[230px] w-[1px]" />
        <Info
          image="/images/social/twitter.png"
          title="Twitter"
          description="t.me/alvara"
        />
        <div className="bg-gradient h-[230px] w-[1px]" />
        <Info
          image="/images/social/email.png"
          title="Email"
          description="t.me/alvara"
        />
        <div className="bg-gradient h-[230px] w-[1px]" />
        <Info
          image="/images/social/medium.png"
          title="Medium"
          description="t.me/alvara"
        />
      </section>
    </main>
  );
}
