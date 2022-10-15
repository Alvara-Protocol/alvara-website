import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Hives, NextImage } from '@/components';

function Arrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextImage
        className="!w-[12px] md:!w-[22px]"
        src="/images/vision/prev.png"
        width={22}
        height={53}
        layout="responsive"
        alt="prev"
      />
    </div>
  );
}

export default function Vision() {
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    className: 'carousel',
  };
  return (
    <main className="relative bg-gray-400 pt-[92px]">
      <Hives className="px-10 md:px-20">
        <div className="py-32">
          <Slider className="" {...settings}>
            <div>
              <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
                <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                  VISION
                </h2>
                <p className="text-center">
                  To accelerate the decentralization of the global economy;
                  delivering the world&apos;s most popular financial product to
                  cryptocurrency.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
                <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                  Purpose.
                </h2>
                <p className="text-center">
                  To provide a fully regulated and secure exchange platform for
                  users to trade, create and manage a wide range of Crypto ETFs.
                </p>
              </div>
            </div>
            <div>
              <div className="mx-auto flex max-w-[580px] flex-col items-center gap-12">
                <h2 className="border-gradient w-2/3 border-b-[3px] pb-5 text-center font-montserrat text-xl font-medium uppercase tracking-widest">
                  Callum mitchell-clark, ceo
                </h2>
                <q className="text-center">
                  We are building the Binance of Crypto ETFs
                </q>
              </div>
            </div>
          </Slider>
        </div>
      </Hives>
    </main>
  );
}
