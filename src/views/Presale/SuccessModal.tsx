import { Modal } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyModal({ show, setShow }: ModalProps) {
  return (
    <>
      <Modal show={show} setShow={setShow}>
        <p className="my-5 text-center text-base text-fuchsia-450">
          <b className="font-bold">Thank you for joining the ALVA presale.</b>
          <br />
          <br />
          Please
          <UnstyledLink href="/news" className="mx-2 underline">
            follow our socials
          </UnstyledLink>
          and/or leave your details below for all updates.
          <br />
          <br />
          Welcome to the Hive!
        </p>
      </Modal>
    </>
  );
}
