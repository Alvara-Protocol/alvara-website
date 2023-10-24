import React from 'react';

import { NextImage } from '@/components';

export default function Hivex() {
  return (
    <div className=" container mx-auto  flex w-full flex-col gap-[26px] font-montserrat md:flex-row">
      <div className=" flex flex-col items-center justify-center gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] px-10 py-16">
        <h1 className="w-full text-left text-[24px] font-medium">
          Thousands of tokens to choose
        </h1>
        <p className="w-full text-left font-poppins text-[20px]">
          Taking our tokens straight from Uniswap, you have access to an
          unlimited amount of tokens.
        </p>
        <NextImage
          // useSkeleton
          className="md:mt-7 "
          src="/images/home/token.png"
          width="300"
          height="170"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col gap-[26px] overflow-hidden">
        <div className=" relative z-10 flex flex-col items-center justify-start gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] px-10 py-10 pb-5">
          <h1 className="w-full text-left text-[24px] font-medium">
            My portfolio
          </h1>
          <p className="z-10 w-full text-left font-poppins text-[20px]">
            One place to manage all of your created and contributed baskets with
            understandable data.
          </p>
          <NextImage
            // useSkeleton
            className=" absolute -right-20 bottom-0"
            src="/images/home/Pie.png"
            width="200"
            height="200"
            alt="Pie"
          />
          <div className="z-10 hidden w-full flex-wrap items-start justify-start gap-2 md:flex">
            <div className="flex items-center justify-center rounded-lg bg-[#EC4899] px-2 py-1">
              GameFi aggressive
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#A855F7] px-2 py-1">
              Masterblox
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#6366F1] px-2 py-1">
              Metaverse
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#3B82F6] px-2 py-1">
              GemFinder
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#14B8A6] px-2 py-1">
              Animoca
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#FACC15] px-2 py-1">
              DAOs
            </div>{' '}
            <div className="flex items-center justify-center rounded-lg bg-[#F59E0B] px-2 py-1">
              Arrow Capital
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] px-10 py-7 md:flex-row">
          <div className="flex flex-col gap-[26px]">
            <h1 className="w-full text-left text-[24px] font-medium">
              Choose your weightings
            </h1>
            <p className="w-full text-left font-poppins text-[20px]">
              Distribute evenly or be meticulous with the weightings of your
              basket.
            </p>{' '}
          </div>
          <NextImage
            // useSkeleton
            src="/images/home/weight.png"
            width="300"
            height="100"
            alt="weigth"
          />
        </div>
      </div>
    </div>
  );
}
