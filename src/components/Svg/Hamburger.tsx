import React from 'react';

import { SvgProps } from './types';

export default function Hamburger({ ...props }: SvgProps) {
  return (
    <svg
      width="27"
      height="12"
      viewBox="0 0 27 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0.909363 1.90527H26.3864" stroke="#131531" strokeWidth="2" />
      <path d="M0.90921 10.0942H17.7423" stroke="#131531" strokeWidth="2" />
    </svg>
  );
}
