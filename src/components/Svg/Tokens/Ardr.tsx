import React from 'react';

import { SvgProps } from '@/components/Svg/types';

export default function Ardr({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5482)">
        <path
          d="M49.7559 99.5117C77.2353 99.5117 99.5117 77.2353 99.5117 49.7559C99.5117 22.2765 77.2353 0 49.7559 0C22.2765 0 0 22.2765 0 49.7559C0 77.2353 22.2765 99.5117 49.7559 99.5117Z"
          fill="#3C87C7"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49.3937 53.4562L54.8949 60.6459L38.8735 71.5238L49.3937 53.4562ZM49.7576 18.6582L58.2378 32.5712L35.6238 71.5238H18.6602L49.7576 18.6582ZM49.7576 49.2643L61.0646 40.9177L80.855 71.5238H66.7212L49.7576 49.2643Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5482">
          <rect width="99.5117" height="99.5117" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
