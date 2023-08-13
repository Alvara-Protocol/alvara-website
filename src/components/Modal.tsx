import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ModalProps extends React.PropsWithChildren {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export default function Modal({
  show,
  setShow,
  children,
  className,
}: ModalProps) {
  function closeModal() {
    setShow(false);
  }

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  'h-5/6 w-11/12 transform overflow-hidden bg-gray-400 p-6 text-left align-middle shadow-xl transition-all ' +
                  className
                }
              >
                <div className="inline-flex w-full justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-gray-500/30 p-2 text-sm font-medium text-purple-300 hover:bg-gray-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
                <div className="mt-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
