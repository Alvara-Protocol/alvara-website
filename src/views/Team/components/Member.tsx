import Image from 'next/image';
import React, { useState } from 'react';

import { LinkedinIcon } from '@/components';
import { Arrow2Icon } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

function Dot() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none"
    >
      <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
    </svg>
  );
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
}

export interface MemberProps {
  name: string;
  photo: string;
  designation: string;
  links?: SocialLinks;
  achievments?: string[];
}

export default function Member({
  name,
  photo,
  designation,
  links,
  achievments = [],
}: MemberProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="border-gradient2 gap-6 border-2 bg-white">
      <div className="px-8 py-4 text-center">
        <div className="rounded-full bg-gradient-to-r from-fuchsia-450 via-[#000] to-fuchsia-450 p-2">
          <Image
            className="mb-4 rounded-full"
            src={photo}
            layout="responsive"
            width={271}
            height={271}
            alt={name}
          />
        </div>

        <div className="font-proppine mt-3 text-sm font-medium">{name}</div>
        <div className="text-xs text-fuchsia-450">{designation}</div>
      </div>

      <div className="flex w-full flex-row items-center justify-between bg-gray-400 px-8 py-4">
        <div className="flex flex-row items-center gap-2">
          {links?.linkedin && (
            <UnstyledLink href={links?.linkedin}>
              <LinkedinIcon />
            </UnstyledLink>
          )}
        </div>
        <button onClick={() => setOpened(!opened)}>
          <Arrow2Icon className={opened ? 'rotate-180' : ''} />
        </button>
      </div>

      {opened && achievments.length !== 0 && (
        <div className="bg-gray-400 p-4">
          <ul className="max-w-md list-outside list-none  space-y-1 text-black">
            {achievments.map((v, i) => (
              <li className="flex items-baseline space-x-3" key={i}>
                <Dot />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
