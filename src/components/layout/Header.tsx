import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';
import { HamburgerIcon } from '@/components/Svg';

interface MobileLinkProps extends React.PropsWithChildren {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileLink = ({ setIsOpen, children }: MobileLinkProps) => {
  return <div onClick={() => setIsOpen(false)}>{children}</div>;
};

const titles = [
  { title: 'BTS Factory', link: '/bts-factory' },
  { title: 'Staking', link: '/staking' },
  { title: 'Governance', link: '/governance' },
  { title: 'Marketplace', link: '/market-place' },
  { title: 'HiveX', link: '/hivex' },
  { title: 'About Alvara', link: '/team' },
  { title: 'News', link: '/news' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);
  const [isPresale, setIsPresale] = React.useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });

    setIsPresale(router.pathname === '/presale');
  }, [router.pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full py-[18px] font-montserrat',
        scroll
          ? 'bg-opacity-80 bg-gradient-to-r from-[#10122A]  to-[#3F1960] shadow backdrop-blur-sm'
          : 'bg-transparent shadow-none',
      )}
    >
      <div className="layout flex h-14 items-center justify-between gap-40">
        <UnstyledLink className="justify-self-start" href="/">
          <NextImage
            useSkeleton
            className="w-32 md:w-40"
            src="/images/nav-logo.png"
            width="230"
            height="45"
            alt="Logo"
          />
        </UnstyledLink>
        <nav>
          <button onClick={openModal} className="block p-2 lg:hidden">
            <HamburgerIcon />
          </button>
          <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-50 overflow-hidden lg:hidden"
              onClose={closeModal}
            >
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute inset-0 bg-slate-900/25 opacity-100 backdrop-blur-sm transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 flex translate-x-0 items-start justify-end overflow-y-auto">
                <div className="min-h-full w-[min(19rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition">
                  <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform divide-y divide-slate-900/10 overflow-hidden bg-white text-left align-middle transition-all">
                      <Dialog.Title as="h3" className="sr-only">
                        Navigation
                      </Dialog.Title>
                      <div className="flex items-center justify-between py-6 px-8">
                        <MobileLink setIsOpen={setIsOpen}>
                          <UnstyledLink href="/">
                            <NextImage
                              useSkeleton
                              className="mt-1.5 w-32"
                              src="/images/nav-logo-black.png"
                              width="230"
                              height="45"
                              alt="Icon"
                            />
                          </UnstyledLink>
                        </MobileLink>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center"
                          onClick={closeModal}
                        >
                          <span className="sr-only">Close navigation</span>
                          <svg
                            className="h-3.5 w-3.5 overflow-visible stroke-slate-900"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L14 14M14 0L0 14"></path>
                          </svg>
                        </button>
                      </div>

                      <nav className="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
                        <div className="py-6 px-8">
                          <div className="items-start space-y-2">
                            {titles.map((title, index) => (
                              <div key={index}>
                                <MobileLink setIsOpen={setIsOpen}>
                                  <UnstyledLink
                                    href={title.link}
                                    className="font-medium "
                                  >
                                    {title.title}
                                  </UnstyledLink>
                                </MobileLink>
                              </div>
                            ))}
                          </div>
                        </div>
                      </nav>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <ul className="hidden gap-10 text-xl lg:flex ">
            {titles.map((title, index) => (
              <li key={index} className="">
                <UnstyledLink
                  href={title.link}
                  className={clsx(
                    'text-[16px]  text-gray-400 hover:text-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                    isPresale && !scroll ? 'text-white' : 'text-white',
                  )}
                >
                  {title.title}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
      </div>
    </header>
  );
}
