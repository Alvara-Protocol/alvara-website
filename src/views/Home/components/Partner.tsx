import React from 'react';

export interface PartnerProps {
  image: any;
  name: string;
}

export default function Partner({ image, name }: PartnerProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={image} alt={name} />;
}
