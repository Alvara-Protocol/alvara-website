import React from 'react';

import { Info } from '@/components';

const linkInfos = [
  {
    image: '/images/social/telegram.png',
    link: 'https://t.me/alvara1',
    title: 'Telegram',
    description: 't.me/alvara',
  },
  {
    image: '/images/social/twitter.png',
    link: 'https://t.me/alvara2',
    title: 'Twitter',
    description: 't.me/alvara',
  },
  {
    image: '/images/social/email.png',
    link: 'https://t.me/alvara3',
    title: 'Email',
    description: 't.me/alvara',
  },
  {
    image: '/images/social/medium.png',
    link: 'https://t.me/alvara4',
    title: 'Medium',
    description: 't.me/alvara',
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
          size={visible ? 141 : 45}
        />
      ))}
    </>
  );
}
