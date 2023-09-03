import { SvgProps } from '@/components/Svg/types';

export default function Bnt({ ...props }: SvgProps) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5310)">
        <path
          d="M50.6855 100C78.1649 100 100.441 77.7235 100.441 50.2441C100.441 22.7647 78.1649 0.488281 50.6855 0.488281C23.2061 0.488281 0.929688 22.7647 0.929688 50.2441C0.929688 77.7235 23.2061 100 50.6855 100Z"
          fill="#000D2B"
        />
        <path
          d="M50.4351 18.7734L36.3853 27.0049L50.4351 35.2395L64.7493 27.0049L50.4351 18.7734ZM52.7457 62.7265V79.1926L71.8301 68.3054V51.8362L52.7457 62.7265ZM67.0598 32.1826V48.6518L52.7426 56.8864V40.4172L67.0598 32.1826ZM32.5977 48.6518L46.9149 56.8864V40.4172L32.5977 32.1826V48.6518ZM32.5977 70.9611L46.9149 79.1926V62.7265L32.5977 54.495V70.958V70.9611Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5310">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.929688 0.488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
