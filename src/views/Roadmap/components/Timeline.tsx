import React from 'react';

function Spot() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_287_619)">
        <circle r="8" transform="matrix(1 0 0 -1 15 15)" fill="#FB3FFF" />
      </g>
      <defs>
        <filter
          id="filter0_d_287_619"
          x="0"
          y="0"
          width="30"
          height="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_287_619"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.541176 0 0 0 0 0.0823529 0 0 0 0 0.835294 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_287_619"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_287_619"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function Timeline() {
  return (
    <div className="container mx-auto grid grid-cols-3">
      <ol className="relative border-l border-[#FB3FFF]">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>

          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q2-Q4 2022
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Project Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>ALVA Contract Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Whitepaper Release</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Alvara Socials</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Seed Round</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Smart Contract Audits</span>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>
          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q1 2023
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Seed Round cont.</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Licensing Applications</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Strategic Partnerships</span>
            </li>
          </ul>
        </li>
        <li className="ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>
          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q2 2023
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Series A Private Round</span>
            </li>

            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Series B Public Round and IDO</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>ALVA TGE</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>CEX Listings</span>
            </li>
          </ul>
        </li>
      </ol>

      <ol className="relative border-l border-[#FB3FFF]">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>

          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q3 2023
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Licensing Approval</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Platform Testing</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Staking Platform Launch</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>NFT Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>ETF Development</span>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>
          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q4 2023
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Beta testing</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>V1 HiveX Launch</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Alvara Spot ETF Listings</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Fiat Gateway</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>NFT Integration</span>
            </li>
          </ul>
        </li>
      </ol>

      <ol className="relative border-l border-[#FB3FFF]">
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>

          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q1 2024
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>V2 HiveX Launch</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Alvara Hive Social Platform</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Leveraged ETFs</span>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#dbbfed]  ring-8 ring-gray-400">
            <Spot />
          </span>
          <h3 className="mb-5 flex items-center pl-5 text-3xl font-semibold text-[#FB3FFF]">
            Q2 2024
          </h3>

          <ul className="max-w-md list-inside list-disc space-y-1 text-xl text-black">
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Mobile App Development</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Traditional Finance Expansion</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#FB3FFF" />
              </svg>
              <span>Tokenized Equity & Commodity ETFs</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
