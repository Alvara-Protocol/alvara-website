import { SvgProps } from '@/components/Svg/types';

export default function Bat({ ...props }: SvgProps) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5396)">
        <path
          d="M50.666 99.5117C78.1454 99.5117 100.422 77.2352 100.422 49.7559C100.422 22.2765 78.1454 0 50.666 0C23.1866 0 0.910156 22.2765 0.910156 49.7559C0.910156 77.2352 23.1866 99.5117 50.666 99.5117Z"
          fill="white"
        />
        <path
          d="M80.8676 69.9943L50.8371 52.8213L20.4648 70.1108L80.8676 69.9943Z"
          fill="#662D91"
        />
        <path
          d="M50.8359 18.1294V52.8211L80.8664 69.9942L50.8359 18.1294Z"
          fill="#9E1F63"
        />
        <path
          d="M20.4648 70.1107L50.8371 52.8211V18.1294L20.4648 70.1107Z"
          fill="#FF5000"
        />
        <path
          d="M50.7233 39.1714L38.3242 59.8715H63.235L50.7233 39.1714Z"
          fill="white"
          stroke="#FF5000"
          strokeWidth="0.185081"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5396">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.910156)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
