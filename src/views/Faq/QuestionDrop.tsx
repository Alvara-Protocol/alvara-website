import { HTMLAttributes, useState } from 'react';
import React from 'react';

import { Button } from '@/components';

import DropDown from '@/views/Faq/DropDown';

export interface DivProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const QuestionDrop = React.forwardRef<HTMLElement, DivProps>(({ ...props }) => {
  const { children, title } = props;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        open
          ? ' z-20 grid w-full grid-cols-1 gap-5 rounded-lg border-[1px] border-gray-500 px-5 py-2 text-left text-sm  hover:cursor-pointer md:w-[896px] md:px-10 md:py-7 md:text-xl '
          : ' z-20 grid w-full grid-cols-1 gap-5 rounded-lg border-[1px] border-gray-500 px-5 py-3 text-left text-sm shadow-lg  hover:cursor-pointer md:w-[896px] md:px-10 md:py-7 md:text-xl '
      }
      onClick={handleOpen}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className=" text-xs font-medium text-white md:text-xl ">{title}</h1>
        <div
          className={
            open
              ? 'flex h-5 w-5 items-center justify-center rounded-full bg-white md:h-10 md:w-10'
              : 'flex h-5 w-5 items-center justify-center rounded-full bg-neutral-700 shadow-md md:h-10 md:w-10'
          }
        >
          <DropDown
            direction={open ? 'down' : 'right'}
            className={
              open
                ? '  h-3 w-3 rotate-90 md:h-5 md:w-5 '
                : 'h-3 w-3 md:h-5 md:w-5'
            }
          />
        </div>
      </div>
      {open ? children : null}
    </div>
  );
});

Button.displayName = 'QuestionDrop';

export default QuestionDrop;
