import React from 'react';

import { SvgProps } from './types';

export default function Triangle({ ...props }: SvgProps) {
  return (
    <svg
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 5L5 -4.37114e-07L0 5L10 5Z" fill="currentColor" />
    </svg>
  );
}
