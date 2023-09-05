import { useState } from 'react';

import { Modal } from '@/components';

interface ItemProps extends React.PropsWithChildren {
  className?: string;
}

export default function Item({ className, children }: ItemProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(true)} className={className}>
        {children}
      </div>
      <Modal show={show} setShow={setShow} className={`  bg-transparent`}>
        {children}
      </Modal>
    </>
  );
}
