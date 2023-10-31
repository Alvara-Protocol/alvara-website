import { SvgProps } from '@/components/Svg/types';

export default function Bsd({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5282)">
        <path
          d="M49.8965 100C77.3759 100 99.6523 77.7235 99.6523 50.2441C99.6523 22.7647 77.3759 0.488281 49.8965 0.488281C22.4171 0.488281 0.140625 22.7647 0.140625 50.2441C0.140625 77.7235 22.4171 100 49.8965 100Z"
          fill="black"
        />
        <path
          d="M87.2119 47.5293H12.5781L56.0025 32.9446L62.107 12.9272L87.2119 47.5293ZM12.9202 52.281H86.8698L43.4485 66.5267L37.3441 87.2221L12.9171 52.281H12.9202Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5282">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.140625 0.488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
