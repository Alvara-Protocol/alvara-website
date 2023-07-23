import { NextImage } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function SubscribeSuccessModal() {
  return (
    <div className="mx-auto my-8 max-w-xl">
      <NextImage
        className="mx-auto"
        src="/images/presale/email.png"
        width={85}
        height={85}
        alt="Success"
      />
      <p className="my-6 text-center text-base ">
        <b className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-lg text-transparent">
          Thank you for submitting your details.
        </b>
        <br />
        <br />
        If you have just joined the ALVA presale then you will receive a
        confirmation email within 24 hours. For any queries please contact the
        team -
        <UnstyledLink
          href="mailto:contact@alvaraprotocol"
          className="mx-2 text-fuchsia-450"
        >
          contact@alvaraprotocol.io
        </UnstyledLink>
      </p>
    </div>
  );
}
