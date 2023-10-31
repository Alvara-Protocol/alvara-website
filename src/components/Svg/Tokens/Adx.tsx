import React from 'react';

import { SvgProps } from '@/components/Svg/types';

export default function Adx({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5548)">
        <path
          d="M49.9434 99.5117C77.4228 99.5117 99.6992 77.2353 99.6992 49.7559C99.6992 22.2765 77.4228 0 49.9434 0C22.464 0 0.1875 22.2765 0.1875 49.7559C0.1875 77.2353 22.464 99.5117 49.9434 99.5117Z"
          fill="#1B75BC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.2207 26.7495L49.944 41.073L63.3314 26.7495L71.7122 35.3262L58.0417 49.7554L71.7122 64.0695L63.3314 72.755L49.944 58.4378L36.2207 72.755L28.1758 64.3089L41.7343 49.6745L28.1758 35.3262L36.2207 26.7526V26.7495ZM37.3246 25.5802L49.888 12.4385L62.4513 25.5802L55.84 32.6238L49.888 26.0498L43.9359 32.6238L37.3246 25.5802ZM37.3246 73.9305L43.9359 66.8869L49.888 73.4609L55.84 66.8869L62.4513 73.9305L49.888 87.0723L37.3246 73.9305Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5548">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.1875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
