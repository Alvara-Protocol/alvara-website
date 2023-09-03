import { StaticImageData } from 'next/image';
import { useState } from 'react';

import { Modal, NextImage } from '@/components';

export default function ImageWithModal({
  src,
  width,
  height,
  alt,
  className,
}: {
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <NextImage
        className={'m-auto hidden hover:cursor-pointer md:block ' + className}
        onClick={() => {
          setShow(true);
        }}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
      <NextImage
        className={'m-auto block md:hidden ' + className}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
      <Modal show={show} setShow={setShow} className={`  bg-transparent`}>
        <NextImage
          className=" h-full w-full justify-center "
          src={src}
          width={width * 2}
          height={height * 2}
          alt={alt}
        />
      </Modal>
    </>
  );
}
