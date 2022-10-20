import { NextImage } from '@/components';

export default function Success() {
  return (
    <div className="border-gradient3 my-4 border-y py-8">
      <NextImage
        className="mx-auto"
        src="/images/presale/success.png"
        width={85}
        height={85}
        alt="Success"
      />
      <p className="my-5 text-center text-base">
        <b className="bg-gradient-to-r from-purple-650 to-fuchsia-450 bg-clip-text text-lg text-transparent">
          Payment successful
        </b>
        <br />
        <br />
        Thank you for joining the ALVA presale.
        <br />
        Welcome to the Hive!
      </p>
    </div>
  );
}
