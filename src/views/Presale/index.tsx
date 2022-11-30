import dynamic from 'next/dynamic';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { NextImage, Seo } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Links from '@/views/News/Links';

import Subscribe from './Subscribe';

const PresaleForm = dynamic(import('./PresaleForm'), { ssr: false });

function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false);
  const ref: any = useRef<T | null>(null);
  const handleMouseOver = (): void => setValue(true);
  const handleMouseOut = (): void => setValue(false);
  useEffect(
    () => {
      const node: any = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [], // Recall only if ref changes
  );
  return [ref, value];
}

export default function Presale() {
  const [hoverRef1, isHovered1] = useHover<HTMLDivElement>();
  const [hoverRef2, isHovered2] = useHover<HTMLDivElement>();
  const [hoverRef3, isHovered3] = useHover<HTMLDivElement>();

  return (
    <>
      <main className="relative">
        <Seo
          templateTitle="Presale"
          description="ALVA is the utility token that powers the Alvara Protocol."
        />
        <div className="absolute top-1/2 left-1/2 z-20 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black py-10 px-8 text-center text-[24px] font-bold leading-[45px] text-white lg:w-auto lg:px-20 lg:text-[40px]">
          Presale Starting Soon!
        </div>
        <div className="h-screen overflow-hidden blur-sm">
          <div className="absolute top-0 left-0 bottom-0 right-0 z-10 h-full w-full"></div>
          <section className="px-[30px] pt-[120px] text-black lg:bg-primary lg:pb-[50px] lg:text-white">
            <NextImage
              className="absolute top-0 left-56 hidden lg:block"
              alt="Nest"
              src="/images/presale/top-back.png"
              width="550"
              height="215"
            />
            <div className="md:container md:mx-auto">
              <div className="grid grid-cols-10 gap-6">
                <div className="col-span-10 flex flex-col gap-7 lg:col-start-1 lg:col-end-5">
                  <p className="mb-8 text-[32px] font-medium uppercase leading-[40px] tracking-widest lg:text-[38px]">
                    ALVA Presale.
                  </p>
                  <p className="text-[14px] font-medium leading-[20px]">
                    ALVA is the utility token that powers the Alvara Protocol.
                    From fee reductions to inclusion in every ETF,{' '}
                    <span className="text-fuchsia-450">
                      ALVA is the honey of the Hive.
                    </span>
                    <br />
                    <br />
                    <span className="font-normal">
                      TGE scheduled for Q2 2023.
                    </span>
                    <br />
                    <br />
                    <span className="font-normal">
                      ALVA tokens will be claimable via this page, in accordance
                      with the vesting schedules.
                    </span>
                  </p>

                  <p className="text-[20px] font-medium tracking-widest text-fuchsia-450">
                    LISTING PRICE $0.15
                  </p>
                  <UnstyledLink
                    className="underline"
                    href="/docs/tokenomics.pdf"
                    openNewTab
                  >
                    Tokenomics
                  </UnstyledLink>
                  <UnstyledLink
                    className="underline"
                    href="/docs/token_utility.pdf"
                    openNewTab
                  >
                    Token Utility
                  </UnstyledLink>
                </div>
                <div className="col-span-10 mt-12 lg:col-start-5 lg:col-end-11 lg:mt-0 xl:col-start-6">
                  <div className="mb-6 grid justify-center gap-6 lg:grid-cols-3 lg:justify-start">
                    <div
                      className="relative h-fit w-[200px] cursor-pointer"
                      ref={hoverRef1}
                    >
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                        Option 1
                      </span>
                      <NextImage
                        src="/images/presale/option.png"
                        alt="Tokenomics"
                        width={323}
                        height={280}
                        className="w-full"
                      />
                    </div>

                    <div className="relative h-fit w-[200px] lg:mx-0 lg:hidden">
                      {isHovered1 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.10
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              No Lock <br />
                              100% of ALVA received <br /> on TGE
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>

                    <div
                      className="relative h-fit w-[200px] cursor-pointer"
                      ref={hoverRef2}
                    >
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                        Option 2
                      </span>
                      <NextImage
                        src="/images/presale/option.png"
                        alt="Tokenomics"
                        width={323}
                        height={280}
                        className="w-full"
                      />
                    </div>

                    <div className="relative h-fit w-[200px] lg:mx-0 lg:hidden">
                      {isHovered2 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.075
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              6 month lock <br />
                              16.7%/month from <br /> month 1
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>

                    <div
                      className="relative h-fit w-[200px] cursor-pointer"
                      ref={hoverRef3}
                    >
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-poppins font-medium text-black lg:text-white">
                        Option 3
                      </span>
                      <NextImage
                        src="/images/presale/option.png"
                        alt="Tokenomics"
                        width={323}
                        height={280}
                        className="w-full"
                      />
                    </div>

                    <div className="relative h-fit w-[200px] lg:mx-0 lg:hidden">
                      {isHovered3 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.05
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              18 month lock <br />
                              5.56%/month from <br /> month 1
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="hidden min-h-[180px] gap-6 lg:grid lg:grid-cols-3">
                    <div className="relative h-fit w-[200px] lg:mx-0">
                      {isHovered1 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.10
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              No Lock <br />
                              100% of ALVA
                              <br /> received on
                              <br /> TGE
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>
                    <div className="relative h-fit w-[200px] lg:mx-0">
                      {isHovered2 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.075
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              6 month lock <br />
                              16.7%/month from <br /> month 1
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>
                    <div className="relative h-fit w-[200px] lg:mx-0">
                      {isHovered3 && (
                        <>
                          <div className="absolute top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-white">
                            <p className="mb-3 text-[16px] font-normal">
                              $0.05
                            </p>
                            <p className="font-poppins text-[12px] font-light">
                              18 month lock <br />
                              5.56%/month from <br /> month 1
                            </p>
                          </div>
                          <NextImage
                            src="/images/presale/option-detail.png"
                            alt="Tokenomics"
                            width={323}
                            height={280}
                            className="w-full"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto mt-20 w-3/4">
            <PresaleForm />
            <Subscribe />
          </section>
          <div className="container mx-auto grid grid-cols-1 items-center justify-center px-8 py-10 md:grid-cols-4 md:px-0 lg:py-10">
            <Links visible={true} />
          </div>
        </div>
      </main>
    </>
  );
}
