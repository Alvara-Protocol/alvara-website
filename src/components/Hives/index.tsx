import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '../NextImage';

import hives from '~/images/hives.png';

export interface HivesProps extends React.PropsWithChildren {
  className?: string;
}

export default function Hives({ children, className }: HivesProps) {
  return (
    <section className={clsxm('relative', className)}>
      <NextImage
        className="absolute top-0 right-0 -translate-y-1/3 rotate-[180deg]"
        width={380}
        height={529}
        src={hives}
        alt="top-right-hives"
      />
      <NextImage
        className="absolute left-0 bottom-0 translate-y-full"
        width={480}
        height={529}
        src={hives}
        alt="left-hives"
      />
      {children}
    </section>
  );
}
