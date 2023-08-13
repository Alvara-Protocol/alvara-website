import React from 'react';

import Modal from '@/components/Modal';
import NextImage from '@/components/NextImage';

export default function RoadMapModal({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  return (
    <Modal show={show} setShow={setShow} className=" bg-transparent">
      <NextImage
        className=" h-screen w-screen"
        src="/docs/Alvara_Roadmap.svg"
        width="1800px"
        height="1000px"
        alt="tokenomics"
      />
    </Modal>
  );
}
