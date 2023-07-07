import { Button, NextImage } from '@/components';

import exclamationSvg from '~/images/bts-factory/exclamation.png';

export default function Exclamation({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <div
      className={
        " group relative flex  h-44 w-10 place-content-center bg-[url('/images/bts-factory/arrow.svg')] bg-center bg-no-repeat " +
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
        className="absolute left-1/2 my-4 hidden w-32  -translate-x-1/2 rounded-md  border-2 border-[#8A15D5] 
    bg-[#1C043C] px-1 text-center text-sm text-white transition-opacity group-hover:block"
      >
        {title}
      </span>
    </div>
  );
}
