import axios from 'axios';
import * as React from 'react';
import { FormEvent } from 'react';
import { toast } from 'react-toastify';

import { ArrowIcon, ArrowWhiteIcon, Button } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

import Links from '@/views/Airdrop/Links';

export default function Footer() {
  const [email, setEmail] = React.useState('');
  const handleTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await axios.post('/api/hbspt', {
        email,
      });
      toast.success('Successfully submitted.');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.error);
      }
    }
  }

  return (
    <footer className=" z-50 flex flex-col-reverse justify-between gap-10 bg-[#0C0E21] px-5 py-4 font-montserrat  text-white shadow-xl md:flex-row md:gap-20 md:px-10 ">
      <div className="grid gap-10">
        <div className=" flex flex-wrap justify-center gap-10 py-4 md:py-10">
          <div className=" grid gap-3 ">
            <h1 className="text-lg font-bold ">Company</h1>
            <UnstyledLink
              href="/"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              Home
            </UnstyledLink>
            <UnstyledLink
              href="/team"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              About us
            </UnstyledLink>
            <UnstyledLink
              href="/bts-factory"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              BTS Factory
            </UnstyledLink>
            <UnstyledLink
              href="/vealva"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              veAlva
            </UnstyledLink>
            <UnstyledLink
              href="/hivex"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              HiveX
            </UnstyledLink>
          </div>
          <div className="grid content-start gap-3">
            <h1 className="text-lg font-bold ">Documents</h1>
            <UnstyledLink
              href="/Alvara_Protocol_White_Paper.pdf"
              className="flex items-center justify-start gap-2"
              target="_blank"
            >
              <ArrowWhiteIcon />
              Whitepaper
            </UnstyledLink>
            <UnstyledLink
              href="/Alvara_Roadmap.pdf"
              className="flex items-center justify-start gap-2"
              target="_blank"
            >
              <ArrowWhiteIcon />
              Roadmap
            </UnstyledLink>
            <UnstyledLink
              href="/Alvara_Tokenomics.pdf"
              className="flex items-center justify-start gap-2"
              target="_blank"
            >
              <ArrowWhiteIcon />
              Tokenomics
            </UnstyledLink>
            <UnstyledLink
              href="/Alvara_Litepaper.pdf"
              className="flex items-center justify-start gap-2"
              target="_blank"
            >
              <ArrowWhiteIcon />
              Litepaper
            </UnstyledLink>

            {/* <UnstyledLink
              href="/hivex"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              Support
            </UnstyledLink> */}
          </div>
          {/*<div className="grid content-start gap-3 ">
            <h1 className="text-lg font-bold uppercase">Staking</h1>
            <UnstyledLink
              href="/staking"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              ALVA Staking
            </UnstyledLink>
            <UnstyledLink
              href="/fac"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              BTS Staking
            </UnstyledLink>
          </div>
          <div className="grid content-start gap-3">
            <h1 className="text-lg font-bold ">Governance</h1>
            <UnstyledLink
              href="/fac"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              ALVA DAO
            </UnstyledLink>
            <UnstyledLink
              href="/fac"
              className="flex items-center justify-start gap-2"
            >
              <ArrowWhiteIcon />
              BTS DAO&apos;s
            </UnstyledLink>
          </div> */}
        </div>
        <p className="container mx-auto text-center text-[18px] text-white lg:text-left">
          © Copyright 2023, Alvara, All rights reserved
        </p>
      </div>
      <div className="bg-radial flex grow flex-col items-start justify-between rounded-lg p-10 md:relative md:max-w-[80vw]">
        <div className="flex flex-wrap items-center justify-start">
          <Links visible={false} />
        </div>
        {/* Insert the contract address here */}
        <div className="my-4 text-center text-lg font-medium">
          Contract Address (ERC-20): <span className="font-bold">0x8e729198d1C59B82bd6bBa579310C40d740A11C2</span>
        </div>
        <div className="grid gap-4">
          <h1 className="text-2xl">Become an early adopter</h1>
          <form
            onSubmit={onSubmit}
            method="post"
            className="flex h-11  max-w-[306px] items-center justify-center gap-4 rounded-xl bg-white px-1  lg:flex-row lg:items-stretch  lg:gap-0"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="font-inter h-10  w-full rounded-xl  px-3 font-normal text-[black] placeholder-[#94A3B8] outline-none  "
              name="email"
              placeholder="Enter your email"
              required
            />
            <Button
              variant="ghost"
              type="submit"
              className="h-12 max-w-max  self-center rounded-xl py-4 uppercase "
            >
              <ArrowIcon />
            </Button>
          </form>
          <div className="flex w-full justify-center">
            <Button
              variant="ghost"
              onClick={handleTop}
              className="w-fit rounded-full border  border-white p-2 md:absolute md:bottom-10 md:right-10"
            >
              <ArrowWhiteIcon className=" -rotate-90 " />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
