import React from 'react';

import { Info } from '@/components';

const linkInfos = [
  {
    image: '/images/social/telegram.png',
    link: 'https://t.me/alvaraannouncements',
    title: 'Telegram',
    description: 'https://t.me/alvara',
  },
  {
    image: '/images/social/twitter.png',
    link: 'https://twitter.com/alvaraprotocol',
    title: 'Twitter',
    description: 'https://twitter.com/alvaraprotocol',
  },
  {
    image: '/images/social/email.png',
    link: 'mailto:contact@alvaraprotocol.io',
    title: 'Email',
    description: 'contact@alvaraprotocol.io',
  },
  {
    image: '/images/social/medium.png',
    link: 'https://alvaraprotocol.medium.com',
    title: 'Medium',
    description: 'https://alvaraprotocol.medium.com',
  },
];

export default function Links({ visible }: { visible: boolean }) {
  return (
    <>
      {linkInfos.map((info) => (
        <Info
          key={info.title}
          image={info.image}
          title={info.title}
          description={info.description}
          link={info.link}
          type={visible ? 2 : 3}
          size={visible ? 95 : 45}
        />
      ))}
    </>
  );
}
