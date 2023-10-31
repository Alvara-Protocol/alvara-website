import React from 'react';

import {
  ExternalIcon,
  LeaderBoardImage,
  NextImage,
  WhitepaperIcon,
} from '@/components';

import { styles } from '@/styles';

export default function AlvaStatus() {
  return (
    <div className=" container mx-auto flex w-full flex-col gap-[26px] py-32 font-montserrat md:flex-row">
      <div className=" flex flex-col items-center justify-center gap-[26px] rounded-lg border-[1px] border-solid border-gray-500 bg-[#0D0F23] pt-10 md:max-w-[800px] ">
        <div className="flex flex-col gap-[26px] px-10">
          <h1
            className={[
              'w-full text-left font-medium',
              styles.context_title,
            ].join(' ')}
          >
            Leaderboard
          </h1>
          <p
            className={['w-full text-left font-poppins', styles.context].join(
              ' ',
            )}
          >
            Whether the ERC-BTS is minted from the factory contract, or coded by
            hand, we will recognize it just like how Opensea recognizes any NFT.
            Every BTS manager is displayed against everybody else, no matter
            their circumstances, background or education.
          </p>
          <button className=" gradient-outline flex max-w-fit items-center gap-5">
            Ask for a demo
            <ExternalIcon />
          </button>
        </div>
        <LeaderBoardImage className="h-auto w-full" />
      </div>
      <div className="flex flex-col gap-[26px] overflow-hidden">
        <div className="z-10 flex flex-col items-start justify-between gap-[26px] rounded-lg border-[1px] border-solid border-gray-500 bg-[#0D0F23] pl-5 pt-9 md:flex-row">
          <div className="flex h-full w-full flex-col justify-between pb-5">
            <div className="grid  gap-[26px]">
              <h1
                className={[
                  ' text-left font-medium',
                  styles.context_title,
                ].join(' ')}
              >
                Learn
              </h1>
              <p
                className={['z-10 break-normal text-left', styles.context].join(
                  ' ',
                )}
              >
                Read our whitepaper
              </p>
            </div>
            <a
              href="/Alvara_Protocol_White_Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-5 flex items-center gap-3 text-left underline md:mt-0"
            >
              Whitepaper <WhitepaperIcon />
            </a>
          </div>
          <div className="flex w-full items-end justify-end pt-5">
            <NextImage
              // useSkeleton
              className=""
              src="/images/home/book-bg.png"
              width="200"
              height="200"
              alt="book"
            />
          </div>
        </div>
        <div className=" flex grow flex-col items-start justify-start gap-[26px] rounded-lg border-[1px] border-solid border-gray-500 bg-[#0D0F23] bg-[url('/images/home/chart-bg.png')] bg-[100%_100%] bg-no-repeat px-10 py-7 pb-32">
          <h1
            className={['text-left font-medium', styles.context_title].join(
              ' ',
            )}
          >
            Constant updates
          </h1>
          <p className={['text-left ', styles.context].join(' ')}>
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
