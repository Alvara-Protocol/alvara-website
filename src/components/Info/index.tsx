/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

export interface InfoProps {
  image: string;
  title: string;
  link?: string;
  description?: string;
  size?: number;
  type?: number;
  imageClassName?: string;
}

export default function Info({
  image,
  link = '/',
  title,
  size = 24,
  type = 1,
  imageClassName,
}: InfoProps) {
  return (
    <div
      className={clsx(
        'bg-[url("/images/social/bg.png")] bg-cover bg-center bg-no-repeat p-5 text-center',
      )}
    >
      {type === 1 && (
        <img
          src={image}
          width={size}
          height={size}
          alt={title}
          className={clsxm('row-span-2 row-start-1 mx-auto', imageClassName)}
          style={{ width: `${size}px`, height: `${size}px` }}
        />
      )}

      {(type === 2 || type === 3) && (
        <UnstyledLink href={link} openNewTab={true}>
          <img
            src={image}
            width={size}
            height={size}
            alt={title}
            className={clsxm('row-span-2 row-start-1 mx-auto', imageClassName)}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        </UnstyledLink>
      )}

      {type !== 3 && (
        <>
          <h4 className=" font-poppins text-[16px] font-medium text-black">
            {title}
          </h4>
          {/* <p className="break-words px-2 text-center font-poppins text-[12px] font-light text-dark-blue-400">
            {description}
          </p> */}
        </>
      )}
    </div>
  );
}
