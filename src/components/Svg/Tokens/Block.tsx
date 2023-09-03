import { SvgProps } from '@/components/Svg/types';

export default function Block({ ...props }: SvgProps) {
  return (
    <svg
      width="101"
      height="100"
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5322)">
        <path
          d="M50.4551 100C77.9345 100 100.211 77.7235 100.211 50.2441C100.211 22.7647 77.9345 0.488281 50.4551 0.488281C22.9757 0.488281 0.699219 22.7647 0.699219 50.2441C0.699219 77.7235 22.9757 100 50.4551 100Z"
          fill="#101341"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.9783 22.2568H66.7847L83.1109 50.2445L66.7847 78.2322H34.6953L50.7416 50.2445L34.9752 22.2568H34.9783ZM51.8642 32.1023L62.2849 50.2445L51.8673 68.3867H61.1592L71.5706 50.2445L61.153 32.1023H51.8673H51.8642Z"
          fill="white"
        />
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.3694 34.7767L29.3449 50.2445L38.2885 65.5756L32.5697 75.5547L17.8047 50.2445L32.6972 24.7104L38.3694 34.7767Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5322">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.699219 0.488281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
