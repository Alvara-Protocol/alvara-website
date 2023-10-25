import Image from 'next/image';
import React from 'react';

import { NextImage } from '@/components';

import { styles } from '@/styles';

export default function Hivex() {
  return (
    <div className=" container mx-auto  flex w-full flex-col gap-[26px] font-montserrat md:flex-row">
      <div className=" flex flex-col items-center justify-center gap-6 rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] px-10 py-8">
        <h1
          className={[
            'w-full text-left font-medium',
            styles.context_title,
          ].join(' ')}
        >
          Thousands of tokens to choose
        </h1>
        <p
          className={['w-full text-left font-poppins', styles.context].join(
            ' ',
          )}
        >
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
        <div className="  z-10 grid items-center justify-start gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] bg-cover bg-center bg-no-repeat px-10 py-8 pb-5 md:bg-[url('/images/home/pie-bg.png')]">
          <h1
            className={[
              'w-full text-left font-medium',
              styles.context_title,
            ].join(' ')}
          >
            My portfolio
          </h1>
          <p
            className={[
              'z-10 w-full text-left font-poppins',
              styles.context,
            ].join(' ')}
          >
            One place to manage all of your created and contributed baskets with
            understandable data.
          </p>
          <div className="z-10 hidden w-full max-w-md flex-wrap items-start justify-start gap-2 md:flex">
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
          <div className="flex items-end justify-end md:hidden">
            <Image
              src="/images/home/Pie.png"
              layout="fixed"
              width={271}
              height={271}
              alt="Pie"
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] px-10 py-7 md:flex-row">
          <div className="flex flex-col gap-[26px]">
            <h1
              className={[
                'w-full text-left font-medium',
                styles.context_title,
              ].join(' ')}
            >
              Choose your weightings
            </h1>
            <p
              className={['w-full text-left font-poppins', styles.context].join(
                ' ',
              )}
            >
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
