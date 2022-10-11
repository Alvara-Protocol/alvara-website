import clsx from 'clsx';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import NextImage from '../NextImage';
export interface InfoProps {
  image: string;
  title: string;
  link: string;
  description?: string;
  size?: number;
  detail: boolean;
}

export default function Info({
  image,
  link = '/',
  title,
  description,
  size = 141,
  detail = false,
}: InfoProps) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        detail ? 'border-gradient4 border-r' : '',
      )}
    >
      <UnstyledLink
        href={link}
        openNewTab={true}
        className="flex justify-center"
      >
        <NextImage src={image} width={size} height={size} alt={title} />
      </UnstyledLink>

      {detail && (
        <>
          <h4 className="my-6 text-center">{title}</h4>
          <p className="text-center">{description}</p>
        </>
      )}
    </div>
  );
}
