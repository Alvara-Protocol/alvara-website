import React from 'react';

import { SvgProps } from './types';

export default function Ethereum({ ...props }: SvgProps) {
  return (
    <svg
      width="34"
      height="54"
      viewBox="0 0 34 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.9964 0L16.625 1.2306V36.9366L16.9964 37.2981L33.989 27.501L16.9964 0Z"
        fill="#343434"
      />
      <path d="M16.993 0L0 27.501L16.993 37.2981V19.9674V0Z" fill="#8C8C8C" />
      <path
        d="M16.9965 40.4359L16.7871 40.6849V53.4039L16.9965 54L33.9994 30.6439L16.9965 40.4359Z"
        fill="#3C3C3B"
      />
      <path d="M16.993 54V40.4359L0 30.6439L16.993 54Z" fill="#8C8C8C" />
      <path
        d="M16.9902 37.2975L33.9828 27.5005L16.9902 19.9668V37.2975Z"
        fill="#141414"
      />
      <path d="M0 27.5005L16.993 37.2975V19.9668L0 27.5005Z" fill="#393939" />
    </svg>
  );
}
