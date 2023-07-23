import React from 'react';

import { Info } from '@/components';

const linkInfos = [
  {
    image: '/images/social/telegram.png',
    link: 'https://t.me/alvaraprotocol',
    title: 'Telegram',
    description: 't.me/alvaraprotocol',
  },
  {
    image: '/images/social/twitter.png',
    link: 'https://twitter.com/alvaraprotocol',
    title: 'Twitter',
    description: 'twitter.com/alvaraprotocol',
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
    description: 'alvaraprotocol.medium.com',
  },
  {
    image: '/images/social/discord.png',
    link: 'http://discord.gg/pHDDF2MS8v',
    title: 'Discord',
    description: 'discord.gg/alvaraprotocol',
  },
  {
    image: '/images/social/instagram.png',
    link: 'https://instagram.com/alvaraprotocol?igshid=MzRlODBiNWFlZA==',
    title: 'Instagram',
    description: 'instagram.com/alvaraprotocol',
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
          size={visible ? 75 : 45}
        />
      ))}
    </>
  );
}
