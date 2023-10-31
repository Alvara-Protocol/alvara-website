import Image from 'next/image';
import React, { useState } from 'react';

import { Arrow2Icon } from '@/components';

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
      <circle cx="6" cy="6" r="6" fill="#FFFFFF" />
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
  achievments?: any[];
}

export default function Member({
  name,
  photo,
  designation,
  achievments = [],
}: MemberProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="grid gap-3 rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] p-4">
      <div className="text-center ">
        <div className="rounded-full p-2 ">
          <Image
            className="mb-4 rounded-full "
            src={photo}
            layout="responsive"
            width={271}
            height={271}
            alt={name}
          />
        </div>

        <div className="font-proppine mt-3 text-sm font-medium">{name}</div>
        <div className="text-xs text-white">{designation}</div>
      </div>

      <div className="grid w-full items-end">
        {/* <div className="flex flex-row items-center gap-2">
          {links?.linkedin && (
            <UnstyledLink href={links?.linkedin}>
              <LinkedinIcon />
            </UnstyledLink>
          )}
        </div> */}
        <button
          onClick={() => setOpened(!opened)}
          className="flex items-center justify-center"
        >
          <Arrow2Icon className={opened ? 'rotate-180' : ''} />
        </button>
      </div>

      {opened && achievments.length !== 0 && (
        <div className="">
          <ul className="max-w-md list-outside list-none  space-y-1 text-white">
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
