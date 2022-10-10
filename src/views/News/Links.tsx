import React from 'react';

import { Info } from '@/components';

export default function Links() {
  return (
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
  );
}
