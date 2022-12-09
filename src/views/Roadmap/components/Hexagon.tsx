import React from 'react';

interface HexagonProps {
  direction: 'up' | 'down';
  title: string;
  contents: string[];
}

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        r="23"
        transform="matrix(-4.37114e-08 1 1 4.37114e-08 23 23)"
        fill="#8A15D5"
        fill-opacity="0.24"
      />
      <g filter="url(#filter0_d_903_2839)">
        <circle
          r="8.36364"
          transform="matrix(-4.37114e-08 1 1 4.37114e-08 23.0023 23.0001)"
          fill="#FB3FFF"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_903_2839"
          x="10.0973"
          y="10.0951"
          width="25.8092"
          height="25.8099"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1.94628"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_903_2839"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.29752" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.541176 0 0 0 0 0.0823529 0 0 0 0 0.835294 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_903_2839"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_903_2839"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function Hexagon({ direction, title, contents }: HexagonProps) {
  // {`hexagon-${direction}`}
  return (
    <div className="hex-container">
      <Dot className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2" />
      <div className={`hex-${direction} gradient-border`}>
        <h6 className="my-2 text-center text-xl font-semibold text-fuchsia-400 xl:my-4 xl:text-4xl">
          {title}
        </h6>
        <ul>
          {contents.map((content, i) => (
            <li key={i} className="font-montserrat text-xs xl:text-xl">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
