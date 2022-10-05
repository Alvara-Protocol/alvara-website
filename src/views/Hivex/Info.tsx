import React from 'react';

import { NextImage } from '@/components';

export interface InfoProps {
  image: string;
  title: string;
  description: string;
}

export default function Info({ image, title, description }: InfoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <NextImage src={image} width={141} height={141} alt={title} />
      <h4 className="text-center">{title}</h4>
      <p className="mt-6 text-center">{description}</p>
    </div>
  );
}
