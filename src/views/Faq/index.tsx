import React from 'react';

import { Hives } from '@/components';

import QuestionDrop from '@/views/Faq/QuestionDrop';

export default function Faq() {
  return (
    <main className="flex flex-col gap-16 bg-[white] pb-20 md:gap-28">
      <Hives className="flex flex-col items-center gap-10 px-4 pt-40 md:flex-row md:justify-around md:px-11">
        <div className="grid">
          <h1 className="z-10 text-center text-3xl  leading-normal  text-gray-400 md:text-[60px]">
            FAQ
          </h1>
          <div className="mb-32 mt-5 h-[2px] w-full bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
        </div>
      </Hives>

      <div className=" relative flex flex-col justify-center gap-8 rounded-xl px-5 text-sm leading-10 text-black md:mx-auto  md:border-2 md:border-[#808080/10] md:px-48 md:py-14 ">
        <div className="absolute -right-32 top-32 z-10  hidden h-96 w-96 bg-[#FB3FFF]/10 blur-[70.06295776367188px] md:block "></div>
        <div className="absolute -left-32 bottom-32 z-10  hidden h-96 w-96 bg-[#FB3FFF]/10 blur-[70.06295776367188px] md:block "></div>
        <QuestionDrop title="What is the Alvara Protocol?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            The Alvara Protocol is a transformative platform in the DeFi space
            designed to democratize the world of fund management. Built on the
            newly developed ERC-BTS token standard, Alvara provides an
            innovative tokenized fund factory that paves the way for anyone to
            become a fund manager. This unique ecosystem maintains complete
            transparency, allowing other investors to confidently contribute to
            the fund. Alvara adds a new dimension to decentralized finance by
            revolutionizing how we perceive and engage with fund management as
            managers and investors.
          </p>
        </QuestionDrop>
        <QuestionDrop title="What is a BTS token & how can I mint one?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            A BTS, or Basket Token Standard, is a new revolutionary token
            standard developed by Alvara. A BTS token encapsulates a portfolio
            of various cryptocurrencies (ERC-20 tokens), offering unique
            rebalancing capabilities and the issuance of unique LP tokens to
            contributors.
            <br />
            <br /> To mint a BTS, you must first make a minimum creator&apos;s
            contribution of 1 ETH. With your contribution ready, you can select
            your preferred tokens with liquidity to form a part of your BTS.
            These selected tokens will be bought, split according to your
            desired weighting, wrapped, and then the BTS will be minted - all
            within a single transaction, to optimize network transaction fees.
            <br />
            <br />
            Minting a BTS token allows you to become a fund manager and control
            your crypto fund within the Alvara protocol. It&apos;s an empowering
            step towards managing your very own portfolio in the decentralized
            finance ecosystem.
          </p>
        </QuestionDrop>
        <QuestionDrop title="What is a BTS LP token?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            A BTS LP (Liquidity Provider) token emulates your stake or ownership
            in a specific Basket Token Standard (BTS). When you contribute
            assets to a BTS, you are issued BTS LP tokens to represent your
            share of the overall assets within that particular BTS. It provides
            an on-chain, transferable proof of your investment and participation
            in the basket of assets.
          </p>
        </QuestionDrop>
        <QuestionDrop title="How does the BTS minting process work?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            Minting a BTS is a straightforward process. When a creator initiates
            the minting process, their ETH contribution is the capital for
            acquiring the desired assets for the BTS. The proportion in which
            these assets are bought aligns with the weightings specified.
            It&apos;s important to note that a small percentage of the ETH
            contribution is deducted to cover platform fees and gas costs
            associated with transactions on the Ethereum network. The remaining
            balance is fully utilized in purchasing the chosen assets from the
            open market. Once the assets are acquired, they are wrapped together
            to form a single BTS minted on-chain. As a result, the creator owns
            their unique BTS, which they can manage and grow according to their
            investment strategy.
          </p>
        </QuestionDrop>
        <QuestionDrop title="How can other users invest in my BTS?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            Users must navigate the Alvara platform&apos;s BTS Factory
            contribution page to invest in a BTS. Here, they can browse various
            BTSs and select the one they wish to invest in. Once a BTS is
            chosen, they input the amount of ETH they want to contribute and hit
            the &apos;CONTRIBUTE&apos; button. Before they confirm the
            transaction, users can see the number of BTS LP tokens they&apos;ll
            receive in exchange for their contribution. Upon successful
            transaction processing, the BTS LP tokens are immediately
            transferred to the user&apos;s wallet, signifying their stake in the
            BTS. This process ensures a seamless and transparent investment
            experience for users wanting to join your BTS.
          </p>
        </QuestionDrop>
        <QuestionDrop title="How can users exit from a BTS when they want to?">
          <div className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            Exiting or redeeming from a BTS is as simple and intuitive as
            contributing to it. Users must specify the number of LP tokens they
            want to redeem on the Alvara platform. They can then preview the
            amount of ETH or tokens they&apos;ll receive in return before
            finalizing the process by clicking on &apos;REDEEM&apos;. Before the
            redemption can take place, users need to authorize the contract to
            spend their LP tokens. Once this permission is granted, users can
            opt for one of two redemption methods: <br />
            <br />
            <ol className="list-inside list-decimal">
              <li>
                <a className="font-bold">Redeem ETH: </a> Users receive ETH, net
                of any applicable fees, directly to their wallet.
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">Redeem Tokens: </a> The corresponding
                tokens that make up the user&apos;s share of the BTS are sent
                directly to the user&apos;s wallet. Any applicable fees are
                covered by selling off small portions of these tokens.
              </li>
            </ol>{' '}
            <br />
            Upon the confirmation of the transaction, the chosen ETH or tokens
            are instantly transferred to the user&apos;s wallet, and the
            corresponding LP tokens are burnt. This ensures a transparent and
            efficient redemption process, allowing users to exit a BTS when they
            choose.
          </div>
        </QuestionDrop>
        <QuestionDrop title="What is the utility of my BTS token?">
          <div className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            A BTS token serves multiple functions, granting the holder various
            privileges within the Alvara ecosystem, with the two primary
            utilities being: <br />
            <br />
            <ol className="list-inside list-disc">
              <li>
                <a className="font-bold">Revenue Generation: </a>As a creator of
                a BTS, you will receive a BTS token upon minting. This token
                entitles you to earn monthly management fees, generating a
                steady income stream.
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">Governance: </a> The BTS LP token also
                serves as a governance token, enabling you the option to
                establish a Decentralized Autonomous Organization (DAO) linked
                to your specific BTS. This DAO can create and vote on proposals
                related to their BTS&apos; management and future direction.
              </li>
            </ol>{' '}
            <br />
            In essence, your BTS token not only represents your ownership and
            success as a fund manager but also provides you with the tools to
            engage and involve contributors in the decision-making process of
            the fund. It&apos;s a powerful asset in decentralized fund
            management.
          </div>
        </QuestionDrop>
        <QuestionDrop title="What can I do with my LP tokens?">
          <div className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            LP (Liquidity Provider) tokens serve two primary purposes within the
            Alvara ecosystem, extending beyond just representing a share in a
            particular BTS. These are: <br />
            <br />
            <ol className="list-inside list-disc">
              <li>
                <a className="font-bold">Governance: </a>LP tokens function as
                governance tokens for their associated BTS. If a BTS creator
                chooses to establish a DAO for their BTS, then you can propose
                and vote on various proposals as an LP token holder. These
                proposals can range from alterations in asset allocation and
                rebalancing frequency to the overall strategy of the BTS.
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">Liquidity: </a> LP tokens can be
                redeemed for the underlying assets or ETH at any time, providing
                liquidity and the flexibility to exit the fund when desired.
              </li>
            </ol>{' '}
          </div>
        </QuestionDrop>
        <QuestionDrop title="Can the fund manager access my funds?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            No. In the Alvara ecosystem, fund managers do not have access to
            your funds at any point. Your assets are securely stored in the
            factory contract, ensuring complete security and control over your
            investment. While fund managers can propose changes to the
            weightings of the BTS, these proposals are subject to a vote by LP
            token holders. It&apos;s the LP token holders who ultimately decide
            whether or not to approve these changes. This ensures that your
            interests are always protected and decisions impacting the fund are
            made collectively.
          </p>
        </QuestionDrop>
        <QuestionDrop title="Can I redeem my funds at any time?">
          <p className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            Yes, you can redeem your funds anytime via the Alvara platform. You
            can initiate the redemption process, select &apos;Redeem ETH&apos;
            or &apos;Redeem tokens&apos;, and your assets will be returned to
            you promptly after the transaction is confirmed.
          </p>
        </QuestionDrop>
        <QuestionDrop title="Are my BTS token and LP tokens transferable?">
          <div className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            Your BTS and LP tokens are fully transferable, providing great
            flexibility and liquidity.
            <br />
            <br />
            <ol className="list-inside list-disc ">
              <li>
                <a className="font-bold">BTS token: </a> You can transfer it to
                another wallet or sell it on Alvara&apos;s BTS Marketplace.
                Selling your BTS token transfers the associated governance
                rights and entitlement to management fees to the new owner.{' '}
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">LP tokens: </a> LP tokens can also be
                transferred to another wallet. Additionally, they can be traded
                within
              </li>
            </ol>{' '}
            <br />
            This transferability empowers you to manage your assets on the
            Alvara platform in a way that best aligns with your investment
            strategy and goals.
          </div>
        </QuestionDrop>
        <QuestionDrop title="What does the ALVA token do?">
          <div className=" text-[11px] font-normal text-[#6F6C90] md:text-lg">
            The ALVA token serves multiple important roles within the Alvara
            ecosystem, adding value to its holders in several ways:
            <br />
            <br />
            <ol className="list-inside list-disc">
              <li>
                <a className="font-bold">BTS Creation: </a> A minimum of 5% of
                ALVA is required in weighting every BTS created through the
                Alvara Protocol. This creates a consistent demand for the token.
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">Staking: </a> ALVA tokens can be staked
                for varying periods. Staking helps reduce liquid token supply
                and earns the stakers rewards as incentives.
                <br />
                <br />
              </li>
              <li>
                <a className="font-bold">Governance: </a> By staking ALVA,
                holders receive veALVA tokens used in the platform&apos;s gauge
                weight voting system. This enables token holders to influence
                the direction of the platform and the distribution of rewards
                among different BTSs.
              </li>
            </ol>
          </div>
        </QuestionDrop>
      </div>
    </main>
  );
}
