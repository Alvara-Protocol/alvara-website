import { SvgProps } from '@/components/Svg/types';

export default function Band({ ...props }: SvgProps) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1451_5403)">
        <path
          d="M49.9199 99.5117C77.3993 99.5117 99.6758 77.2353 99.6758 49.7559C99.6758 22.2765 77.3993 0 49.9199 0C22.4405 0 0.164062 22.2765 0.164062 49.7559C0.164062 77.2353 22.4405 99.5117 49.9199 99.5117Z"
          fill="#516AFF"
        />
        <path
          d="M57.0293 38.8065L63.8707 42.7154V23.1676L50.1879 16.3262L28.9297 28.2987V70.8119L50.1879 83.0301L71.2004 70.5694V49.5569L50.9187 37.3387L44.0772 40.7594L64.359 52.7319L64.6015 67.1487L50.1879 75.2122L35.5254 66.903V31.7194L50.1879 23.6558L57.0293 27.3222V38.8065Z"
          fill="white"
        />
        <path
          d="M49.4549 50.5341L54.0977 48.0899L59.2288 51.268L44.0781 59.8198V42.228L49.4549 45.4031"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_5403">
          <rect
            width="99.5117"
            height="99.5117"
            fill="white"
            transform="translate(0.164062)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
