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
        className="rotate-180"
        src="/images/vision/prev.png"
        width={22}
        height={53}
        alt="prev"
      />
    </div>
  );
}

export default function Vision() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    <main className="min-h-[calc(100vh)] bg-gray-400">
      <Hives className="px-20">
        <Slider className="translate-y-full" {...settings}>
          <div>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
              <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                Hivex
              </h2>
              <p>
                Why is the exchange so good? looks nice, easy to use, web3 -
                link metamask, secure, ability to trade ETFs, ability to build
                (only place to build), facilitate onboarding with HiveMind
                trading. Add a general description of the items listed below.
                You can introduce the list and include any relevant information
                you want to share. Double click to edit the text.
              </p>
            </div>
          </div>
          <div>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
              <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                Hivex2
              </h2>
              <p>
                Why is the exchange so good? looks nice, easy to use, web3 -
                link metamask, secure, ability to trade ETFs, ability to build
                (only place to build), facilitate onboarding with HiveMind
                trading. Add a general description of the items listed below.
                You can introduce the list and include any relevant information
                you want to share. Double click to edit the text.
              </p>
            </div>
          </div>
          <div>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
              <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                Hivex3
              </h2>
              <p>
                Why is the exchange so good? looks nice, easy to use, web3 -
                link metamask, secure, ability to trade ETFs, ability to build
                (only place to build), facilitate onboarding with HiveMind
                trading. Add a general description of the items listed below.
                You can introduce the list and include any relevant information
                you want to share. Double click to edit the text.
              </p>
            </div>
          </div>
        </Slider>
      </Hives>
    </main>
  );
}
