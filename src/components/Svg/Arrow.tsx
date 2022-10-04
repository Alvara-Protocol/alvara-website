import React from 'react';

import { SvgProps } from './types';

export default function Arrow({ ...props }: SvgProps) {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9999 9L15.2928 5.70711C15.6834 5.31658 15.6834 4.68342 15.2928 4.29289L11.9999 1M14.9999 5L0.999939 5"
        stroke="#131531"
        strokeLinecap="round"
      />
    </svg>
  );
}
