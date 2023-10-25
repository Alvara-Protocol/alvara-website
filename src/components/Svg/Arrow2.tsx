import React from 'react';

import { SvgProps } from './types';
export default function Arrow2({ ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      {...props}
    >
      <path d="M14 1L7.5 8L1 1" stroke="white" strokeWidth="2" />
    </svg>
  );
}
