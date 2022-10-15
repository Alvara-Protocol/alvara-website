import { Dialog, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';

import { NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';
import { ChevronDownIcon, HamburgerIcon } from '@/components/Svg';

const techLinks = [
  { href: '/hivex', label: 'HiveX' },
  { href: '/smart-funds', label: 'Smart Funds' },
];

const aboutAlvaraLinks = [
  { href: '/vision', label: 'Vision' },
  { href: '/team', label: 'Team' },
  { href: '/roadmap', label: 'Roadmap & Papers' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShowingTech, setIsShowingTech] = React.useState(false);
  const [isShowingAbout, setIsShowingAbout] = React.useState(false);
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
          ? 'bg-white bg-opacity-80 shadow backdrop-blur-sm'
          : 'bg-transparent shadow-none',
      )}
    >
      <div className="layout flex h-14 items-center justify-between">
        <UnstyledLink href="/">
          <NextImage
            useSkeleton
            className="w-32 md:w-40"
            src={
              isPresale && !scroll
                ? '/images/nav-logo.png'
                : '/images/nav-logo-black.png'
            }
            width="230"
            height="45"
            alt="Logo"
          />
        </UnstyledLink>
        <nav>
          <button onClick={openModal} className="block p-2 lg:hidden">
            <HamburgerIcon
              stroke={isPresale && !scroll ? '#FFFFFF' : '#131531'}
            />
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
                            <div>
                              <button
                                onClick={() =>
                                  setIsShowingTech(
                                    (isShowingTech) => !isShowingTech,
                                  )
                                }
                                className="font-medium"
                              >
                                Technology
                              </button>
                              <Transition
                                show={isShowingTech}
                                enter="transition-opacity duration-50"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-50"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <ul className="ml-3">
                                  {techLinks.map((link) => (
                                    <li key={link.href}>
                                      <UnstyledLink
                                        className="block p-1"
                                        href={link.href}
                                      >
                                        {link.label}
                                      </UnstyledLink>
                                    </li>
                                  ))}
                                </ul>
                              </Transition>
                            </div>
                            <div>
                              <button
                                onClick={() =>
                                  setIsShowingAbout(
                                    (isShowingAbout) => !isShowingAbout,
                                  )
                                }
                                className="font-medium"
                              >
                                About Alvara
                              </button>
                              <Transition
                                show={isShowingAbout}
                                enter="transition-opacity duration-50"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-50"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <ul className="ml-3">
                                  {aboutAlvaraLinks.map((link) => (
                                    <li key={link.href}>
                                      <UnstyledLink
                                        className="block p-1"
                                        href={link.href}
                                      >
                                        {link.label}
                                      </UnstyledLink>
                                    </li>
                                  ))}
                                </ul>
                              </Transition>
                            </div>
                            <div>
                              <UnstyledLink
                                href="/news"
                                className="font-medium"
                              >
                                The Buzz
                              </UnstyledLink>
                            </div>
                          </div>
                        </div>
                        <div className="py-6 px-8">
                          <UnstyledLink
                            href="/presale"
                            className="focus-visible:ring-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400 inline-block bg-gradient-to-r from-purple-650 to-fuchsia-450 py-1 px-10 text-[16px] font-medium text-white shadow-sm transition-colors duration-75 focus:outline-none focus-visible:ring disabled:cursor-not-allowed"
                          >
                            ALVA
                          </UnstyledLink>
                        </div>
                      </nav>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <ul className="hidden items-center justify-between space-x-3 lg:flex">
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button
                  className={clsx(
                    'inline-flex w-full items-center justify-center px-4 py-2 text-[16px] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                    isPresale && !scroll ? 'text-white' : 'text-dark-blue-400',
                  )}
                >
                  Technology
                  <ChevronDownIcon
                    className={clsx(
                      'ml-1.5 mt-0.5 h-4 w-4',
                      isPresale && !scroll
                        ? 'text-white'
                        : 'text-dark-blue-400',
                    )}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white text-dark-blue-400 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2">
                      {techLinks.map((link) => (
                        <Menu.Item key={link.href} as={React.Fragment}>
                          {({ active }) => (
                            <UnstyledLink
                              className={`block p-1 text-[15px] ${
                                active
                                  ? 'bg-primary text-white'
                                  : 'bg-white text-black'
                              }`}
                              href={link.href}
                            >
                              {link.label}
                            </UnstyledLink>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button
                  className={clsx(
                    'inline-flex w-full items-center justify-center px-4 py-2 text-[16px] hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                    isPresale && !scroll ? 'text-white' : 'text-dark-blue-400',
                  )}
                >
                  About Alvara
                  <ChevronDownIcon
                    className={clsx(
                      'ml-1.5 mt-0.5 h-4 w-4',
                      isPresale && !scroll
                        ? 'text-white'
                        : 'text-dark-blue-400',
                    )}
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-3 py-2">
                      {aboutAlvaraLinks.map((link) => (
                        <Menu.Item key={link.href} as={React.Fragment}>
                          {({ active }) => (
                            <UnstyledLink
                              className={`block p-1 text-[15px] ${
                                active
                                  ? 'bg-primary text-white'
                                  : 'bg-white text-black'
                              }`}
                              href={link.href}
                            >
                              {link.label}
                            </UnstyledLink>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li>
              <UnstyledLink
                href="/the-buzz"
                className={clsx(
                  'text-[16px] hover:text-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                  isPresale && !scroll ? 'text-white' : 'text-dark-blue-400',
                )}
              >
                The Buzz
              </UnstyledLink>
            </li>
            <li className="">
              <UnstyledLink
                href="/presale"
                className="focus-visible:ring-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400 ml-20 items-center bg-gradient-to-r from-purple-650 to-fuchsia-450 py-2 px-10 font-medium text-white shadow-sm transition-colors duration-75 focus:outline-none focus-visible:ring disabled:cursor-not-allowed"
              >
                ALVA
              </UnstyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
