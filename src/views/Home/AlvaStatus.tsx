import React from 'react';

import { Button, LeaderBoardImage, NextImage } from '@/components';

export default function AlvaStatus() {
  return (
    <div className=" container mx-auto flex w-full flex-col gap-[26px] py-32 font-montserrat md:flex-row">
      <div className=" flex flex-col items-center justify-center gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] pt-10 md:max-w-[800px] ">
        <div className="flex flex-col gap-[26px] px-10">
          <h1 className="w-full text-left text-[24px] font-medium">
            Leaderboard
          </h1>
          <p className="w-full text-left font-poppins text-[20px]">
            Whether the ERC-BTS is minted from the factory contract, or coded by
            hand, we will recognize it just like how Opensea recognizes any NFT.
            Every BTS manager is displayed against everybody else, no matter
            their circumstances, background or education.
          </p>
          <Button
            variant="ghost"
            className=" outline self-start rounded-lg outline-1 outline-[#8A15D5]"
          >
            Ask for a demo
          </Button>
        </div>
        <LeaderBoardImage className="h-auto w-full" />
      </div>
      <div className="flex flex-col gap-[26px] overflow-hidden">
        <div className="  z-10 flex flex-col items-center justify-between gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] pl-5 pt-5 md:flex-row">
          <div className="flex flex-col gap-[26px]">
            <h1 className=" text-left text-[24px] font-medium">Learn</h1>
            <p className="z-10 text-left font-poppins text-[20px]">
              Read our whitepaper
            </p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-left"
            >
              Whitepaper
            </a>
          </div>
          <NextImage
            // useSkeleton
            className=""
            src="/images/home/book-bg.png"
            width="200"
            height="200"
            alt="book"
          />
        </div>
        <div className=" flex grow flex-col items-start justify-start gap-[26px] rounded-xl border-[1px] border-solid border-gray-500 bg-[#0D0F23] bg-[url('/images/home/chart-bg.png')] bg-cover bg-center bg-no-repeat px-10 py-7 pb-40">
          <h1 className="text-left text-[24px] font-medium">
            Choose your weightings
          </h1>
          <p className="text-left font-poppins text-[20px]">
            Stay updated on your fund and others.
            <br />
            <br /> Find data ranging from contribution activity, marketplace
            listings all the way to the funds latest acquisitions and
            performance.
            <br />
            <br /> You now have the ability to find the fund perfect for you, or
            better yet, create your own.
          </p>{' '}
        </div>
      </div>
    </div>
  );
}
