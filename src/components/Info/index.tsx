import React from 'react';

import NextImage from '../NextImage';

export interface InfoProps {
  image: string;
  title: string;
  description: string;
  size?: number;
}

export default function Info({
  image,
  title,
  description,
  size = 141,
}: InfoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <NextImage src={image} width={size} height={size} alt={title} />
      <h4 className="text-center">{title}</h4>
      <p className="mt-6 text-center">{description}</p>
    </div>
  );
}
