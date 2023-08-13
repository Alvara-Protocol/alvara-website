import Image from 'next/image';
import React from 'react';

import Modal from '@/components/Modal';

export default function TokenomicsModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  return (
    <Modal show={show} setShow={setShow} className=" bg-transparent">
      <Image
        className=" h-screen w-screen"
        src="/docs/Alvara_Tokenomics.svg"
        width="1800px"
        height="1000px"
        alt="tokenomics"
      />
    </Modal>
  );
}
