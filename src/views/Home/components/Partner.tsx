import React from 'react';

import { NextImage } from '@/components';

export interface PartnerProps {
  image: any;
  name: string;
  width?: string;
  heigth?: string;
  zIndex?: string;
}

export default function Partner({
  image,
  name,
  width,
  heigth,
  zIndex,
}: PartnerProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <div
      className={
        'grid h-48 w-48 items-center rounded-full border-2 border-fuchsia-400 bg-white p-2 shadow-2xl md:h-60 md:w-60 ' +
        zIndex
      }
    >
      <NextImage
        useSkeleton
        className="mt-1.5  w-full "
        src={image}
        width={width ? width : '230'}
        height={heigth ? heigth : '100'}
        alt={name}
      />
    </div>
  );
}
