import React from 'react';

import { NextImage } from '@/components';

export interface PartnerProps {
  image: any;
  name: string;
}

export default function Partner({ image, name }: PartnerProps) {
  return (
    <NextImage
      className="border-gradient2 border-gradient--rounded rounded-full border"
      width={160}
      height={160}
      src={image}
      alt={name}
    />
  );
}
