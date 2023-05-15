import React from 'react';

import NextImage from '../NextImage';

import hives2 from '~/images/hives.png';
import hives1 from '~/images/hives-1.png';

export interface HivesProps extends React.PropsWithChildren {
  className?: string;
}

export default function Hives({ children, className }: HivesProps) {
  return (
    <section
      className={'bg-gradient-to-r from-[#10122A] to-[#3F1960] ' + className}
    >
      <NextImage
        className="absolute top-0 right-0 z-10 w-48 md:w-[420px]"
        width={634}
        height={600}
        src={hives1}
        alt="top-right-hives"
      />
      <NextImage
        className="absolute -left-0 top-48 z-10 w-48 md:top-0 md:w-[420px] "
        width={420}
        height={600}
        src={hives2}
        alt="left-hives"
      />
      {children}
    </section>
  );
}
