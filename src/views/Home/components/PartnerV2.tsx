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
        `grid h-[67px] items-center rounded-lg border-[1px] border-solid border-gray-500 bg-[#0D0F23] p-2 px-4 ` +
        zIndex
      }
      style={{ width: (+(width || '10') + 10).toString() + 'px' }}
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
