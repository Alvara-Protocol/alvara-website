import React from 'react';

import NextImage from '../NextImage';

import hives2 from '~/images/hives.png';
import hives1 from '~/images/hives-1.png';

export interface HivesProps extends React.PropsWithChildren {
  className?: string;
}

export default function Hives({ children, className }: HivesProps) {
  return (
    <section className={className}>
      <NextImage
        className="absolute top-0 right-0 -z-[1] w-[420px]"
        width={634}
        height={920}
        src={hives1}
        alt="top-right-hives"
      />
      <NextImage
        className="absolute -left-28 -top-4 -z-[1]  w-[420px]"
        width={699}
        height={1483}
        src={hives2}
        alt="left-hives"
      />
      {children}
    </section>
  );
}
