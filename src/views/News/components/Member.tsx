import React from 'react';

import { Arrow2Icon, LinkedinIcon, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
}

export interface MemberProps {
  name: string;
  photo: string;
  designation: string;
  links?: SocialLinks;
}

export default function Member({
  name,
  photo,
  designation,
  links,
}: MemberProps) {
  return (
    <div className="border-gradient2 flex max-w-max flex-col items-center justify-around gap-6 border-2 bg-gray-400 py-4 px-8">
      <div className="flex flex-col items-center gap-4">
        <NextImage
          className="mb-4"
          src={photo}
          width={271}
          height={271}
          alt={name}
        />
        <div className="font-proppine text-2xl font-medium">{name}</div>
        <div className="text-purple-700">{designation}</div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          {links?.linkedin && (
            <UnstyledLink href={links?.linkedin}>
              <LinkedinIcon />
            </UnstyledLink>
          )}
        </div>
        <button>
          <Arrow2Icon />
        </button>
      </div>
    </div>
  );
}
