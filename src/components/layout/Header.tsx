import { Menu, Transition } from '@headlessui/react';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import { ChevronDownIcon } from '@/components/Svg';

const techLinks = [
  { href: '/hivex', label: 'HiveX' },
  { href: '/smart-funds', label: 'Smart Funds' },
];

const aboutAlvaraLinks = [
  { href: '/vision', label: 'Vision' },
  { href: '/team', label: 'Team' },
  { href: '/roadmap-papers', label: 'Roadmap & Papers' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="layout flex h-14 items-center justify-between">
        <UnstyledLink href="/" className="font-bold hover:text-gray-600">
          <NextImage
            useSkeleton
            className="w-32 md:w-48"
            src="/images/nav-logo.svg"
            width="230"
            height="45"
            alt="Icon"
          />
        </UnstyledLink>
        <nav>
          <ul className="flex items-center justify-between space-x-3">
            <li>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Technology
                  <ChevronDownIcon
                    className="ml-1.5 mt-0.5 h-4 w-4 text-violet-200 hover:text-violet-100"
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
                      {techLinks.map((link) => (
                        <Menu.Item key={link.href} as={React.Fragment}>
                          {({ active }) => (
                            <UnstyledLink
                              className={`block p-1 ${
                                active
                                  ? 'bg-blue-500 text-white'
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
                <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  About Alvara
                  <ChevronDownIcon
                    className="ml-1.5 mt-0.5 h-4 w-4 text-violet-200 hover:text-violet-100"
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
                              className={`block p-1 ${
                                active
                                  ? 'bg-blue-500 text-white'
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
                className="text-sm font-medium text-white hover:text-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                The Buzz
              </UnstyledLink>
            </li>
            <li>
              <UnstyledLink
                href="/the-buzz"
                className="text-sm font-medium text-white hover:text-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
