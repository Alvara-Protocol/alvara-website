import { Button, NextImage } from '@/components';

import Exclamation from '@/views/BTSFactory/Exclamation';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function MobileBtsFactory({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={
        "h-[2300px] w-full bg-[url('/images/bts-factory/mobile-sub-back.png')] bg-cover bg-center bg-no-repeat  " +
        className
      }
    >
      <div className="grid px-5">
        <h1 className="z-10  text-center text-3xl uppercase leading-normal  text-gray-400 md:text-[60px]">
          BTS Factory
        </h1>
        <div className="mb-12 h-[2px] w-64 place-self-center bg-gradient-to-r from-fuchsia-400 to-transparent "></div>
      </div>
      <div className="flex px-5 text-xl text-purple-300">
        Manager creates
        <p className="pl-2 tracking-tight text-fuchsia-400"> BTS with ETH</p>
      </div>
      <div className="px-15 mt-10">
        <div className="outline mx-2 rounded-2xl bg-[#1C043C] px-16 py-10 text-center text-2xl font-bold text-purple-50 outline-1 outline-fuchsia-450">
          Manager
        </div>
      </div>
      <div className="mt-10 grid grid-cols-3 place-items-center px-5 ">
        <Exclamation title="Manager gets NFT" />
        <Exclamation title="Manager gets LP tokens" />
        <Exclamation title="Management fee" />
      </div>
      <div className="mx-3 mt-10 rounded-lg border border-dashed border-[#8A15D5] bg-[#1C043C] p-5 px-5 text-center text-base text-white">
        Creation, contribution and redeem will be divided according to token
        weightings
      </div>
      <div className="flex place-content-center px-5">
        <div className="mt-3 h-20 w-[2px]  place-self-center bg-white"></div>
      </div>

      <div className="mt-72 flex justify-between">
        <div
          className={
            " group relative flex  h-[635px] w-10 place-content-center bg-[url('/images/bts-factory/Arrow9.png')] bg-center bg-no-repeat " +
            className
          }
        >
          <Button className=" bg-none px-0">
            <NextImage
              className="m-auto "
              width={30}
              height={30}
              src={exclamationSvg}
              alt="exclamation"
            />
          </Button>
          <span
            className="absolute left-1/2 my-4 hidden w-32  translate-x-6 translate-y-64 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
          >
            investors gets LP tokens
          </span>
        </div>
        <div
          className={
            " group relative flex  h-[635px] w-10 place-content-center bg-[url('/images/bts-factory/Arrow10.png')] bg-center bg-no-repeat " +
            className
          }
        >
          <Button className=" bg-none px-0">
            <NextImage
              className="m-auto "
              width={30}
              height={30}
              src={exclamationSvg}
              alt="exclamation"
            />
          </Button>
          <span
            className="absolute left-1/2 my-4 hidden w-32  -translate-x-36 translate-y-64 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
          >
            investors contributes ETH
          </span>
        </div>
      </div>
    </div>
  );
}
