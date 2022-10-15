import clsx from 'clsx';
import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import NextImage from '../NextImage';
export interface InfoProps {
  image: string;
  title: string;
  link?: string;
  description?: string;
  size?: number;
  type?: number;
}

export default function Info({
  image,
  link = '/',
  title,
  description,
  size = 141,
  type = 1,
}: InfoProps) {
  return (
    <div
      className={clsx(
        'flex flex-col',
        type === 2
          ? 'border-gradient4 border-b py-10 last:border-0 md:border-b-0 md:border-r'
          : '',
      )}
    >
      {type === 1 && (
        <NextImage
          src={image}
          width={size}
          height={size}
          alt={title}
          className="mx-auto"
        />
      )}

      {(type === 2 || type === 3) && (
        <UnstyledLink href={link} openNewTab={true}>
          <NextImage
            src={image}
            width={size}
            height={size}
            alt={title}
            className="mx-auto"
          />
        </UnstyledLink>
      )}

      {type !== 3 && (
        <>
          <h4 className="my-6 text-center font-poppins text-[16px] font-medium text-black">
            {title}
          </h4>
          <p className="break-words px-2 text-center font-poppins text-[12px] font-light text-dark-blue-400">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
