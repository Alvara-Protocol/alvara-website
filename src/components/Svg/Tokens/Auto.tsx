import React from 'react';

import { SvgProps } from '@/components/Svg/types';

export default function Auto({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5427)">
        <path
          d="M49.9434 99.5117C77.4228 99.5117 99.6992 77.2353 99.6992 49.7559C99.6992 22.2765 77.4228 0 49.9434 0C22.464 0 0.1875 22.2765 0.1875 49.7559C0.1875 77.2353 22.464 99.5117 49.9434 99.5117Z"
          fill="#FAB431"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.3773 59.9151L63.363 52.1066L64.8557 45.9213L70.4128 49.2021V37.9075L52.5629 27.266V51.8329L48.3181 54.1808L71.7593 68.0813L49.9445 80.853L23.5117 65.3727V34.4153L49.9445 18.6582L76.3773 34.4153V59.9151ZM29.4762 37.9075V58.0524L46.6357 48.1012V27.6764L29.4762 37.9044V37.9075ZM42.2168 57.6357L32.4584 63.6033L49.9445 73.8406L59.8179 68.0564L42.2168 57.6326V57.6357Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5427">
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
