import { SvgProps } from '@/components/Svg/types';

export default function Bat1({ ...props }: SvgProps) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5392)">
        <path
          d="M50.4082 99.5117C77.8876 99.5117 100.164 77.2353 100.164 49.7559C100.164 22.2765 77.8876 0 50.4082 0C22.9288 0 0.652344 22.2765 0.652344 49.7559C0.652344 77.2353 22.9288 99.5117 50.4082 99.5117Z"
          fill="#FF5000"
        />
        <path
          d="M19.3125 73.079L50.5685 20.2134L81.5073 73.0074L19.3125 73.079ZM50.4939 41.6084L37.7191 62.7111H63.3278L50.4939 41.6084Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5392">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.652344)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
