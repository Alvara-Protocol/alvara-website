import { Modal } from '@/components';
import UnstyledLink from '@/components/links/UnstyledLink';

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SubscribeSuccessModal({ show, setShow }: ModalProps) {
  return (
    <Modal show={show} setShow={setShow}>
      <p className="my-5 text-center text-base text-fuchsia-450">
        <b className="font-bold">Thank you for submitting your details.</b>
        <br />
        <br />
        If you have just joined the ALVA presale then you will receive a
        confirmation email within 24 hours.
        <br />
        <br />
        For any queries please contact the team -
        <UnstyledLink
          href="mailto:contact@alvaraprotocol"
          className="mx-2 underline"
        >
          contact@alvaraprotocol.io
        </UnstyledLink>
      </p>
    </Modal>
  );
}
