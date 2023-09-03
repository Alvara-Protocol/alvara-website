import React from 'react';

import { SvgProps } from '@/components/Svg/types';

export default function Ark({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5472)">
        <path
          d="M50.2441 99.5117C77.7235 99.5117 100 77.2353 100 49.7559C100 22.2765 77.7235 0 50.2441 0C22.7647 0 0.488281 22.2765 0.488281 49.7559C0.488281 77.2353 22.7647 99.5117 50.2441 99.5117Z"
          fill="#F70000"
        />
        <path
          d="M50.0814 41.5056L16.0391 77.4013L50.2338 21.7681L84.4534 77.7434L50.0814 41.5056ZM55.0197 55.7637H44.3781L49.8513 49.7433L55.0197 55.8166V55.7637ZM34.4954 65.6434V65.5688L40.5314 59.3897V59.3617L58.941 59.284L65.1543 65.6434H34.4985H34.4954Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5472">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
