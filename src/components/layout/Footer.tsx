import * as React from 'react';

import { Button, NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className="border-gradient3 mx-8 grid border-t py-6 lg:grid-cols-10">
      <div className="col-span-6">
        <div className="flex items-center gap-8">
          <NextImage
            useSkeleton
            className="mt-1.5 mr-12 w-48"
            src="/svg/nav-logo-black.svg"
            width="230"
            height="45"
            alt="Alvara"
          />
          <UnstyledLink href="/hivex">HiveX</UnstyledLink>
          <UnstyledLink href="/about">About</UnstyledLink>
          <UnstyledLink href="/careers">Careers</UnstyledLink>
        </div>
        <p className="mt-10 mb-8">Email: contact@alvaraprotocol.io</p>
        <div className="my-6 flex flex-row items-center gap-4">
          <UnstyledLink openNewTab href="https://t.me/alvara">
            <NextImage
              useSkeleton
              src="/images/social/telegram.png"
              width="36"
              height="36"
              alt="Alvara"
            />
          </UnstyledLink>
          <UnstyledLink openNewTab href="https://t.me/alvara">
            <NextImage
              useSkeleton
              src="/images/social/twitter.png"
              width="36"
              height="36"
              alt="Alvara"
            />
          </UnstyledLink>
          <UnstyledLink openNewTab href="https://t.me/alvara">
            <NextImage
              useSkeleton
              src="/images/social/email.png"
              width="36"
              height="36"
              alt="Alvara"
            />
          </UnstyledLink>
          <UnstyledLink openNewTab href="https://t.me/alvara">
            <NextImage
              useSkeleton
              src="/images/social/medium.png"
              width="36"
              height="36"
              alt="Alvara"
            />
          </UnstyledLink>
        </div>
        <p>©2023 by Alvara</p>
      </div>
      <div className="col-span-4">
        <p className="pt-3">SUBSCRIBE</p>
        <p className="mt-6 mb-5">Sign up to receive Alvara news and updates</p>
        <form action="/api/form" method="post" className="flex">
          <input type="email" name="email" placeholder="Email" required />
          <Button variant="outline" className="max-w-max py-4 uppercase">
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  );
}
