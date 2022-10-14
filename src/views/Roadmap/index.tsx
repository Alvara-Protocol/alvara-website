import React from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button, Hives, NextImage } from '@/components';

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

export default function Roadmap() {
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
    <main className="min-h-[calc(100vh)] ">
      <Hives className="bg-gray-400 px-20 py-28">
        <Slider className="" {...settings}>
          <div>
            <div className="mx-auto flex max-w-[560px] flex-col items-center gap-12">
              <h2 className="border-gradient w-1/2 border-b-[3px] pb-5 text-center font-montserrat font-medium uppercase tracking-widest">
                Roadmap
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
                Roadmap2
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
                Roadmap3
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
      <div className="container mx-auto flex flex-row items-center justify-between gap-28 p-8">
        <div className="border-gradient2 flex w-1/2 flex-col items-center gap-8 border-2 bg-gray-400 px-8 py-28">
          <h2>Whitepaper</h2>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p className="max-w-[350px] text-center font-poppins text-[20px] font-light tracking-widest">
            Thorough description of the Alvara Protocol
          </p>

          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
        <div className="border-gradient2 flex w-1/2 flex-col items-center gap-8 border-2 bg-gray-400 px-8 py-28">
          <h2>Deck.</h2>
          <div className="h-[4px] w-4/5 bg-gradient-to-r from-purple-650 to-transparent"></div>
          <p className="max-w-[350px] text-center font-poppins text-[20px] font-light tracking-widest">
            A quick glance at what makes Alvara so sweet
          </p>

          <Button variant="outline" className="max-w-max uppercase">
            Read more
          </Button>
        </div>
      </div>
    </main>
  );
}
