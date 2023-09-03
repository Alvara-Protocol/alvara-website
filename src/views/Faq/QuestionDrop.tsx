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
          ? ' z-20 grid w-full grid-cols-1 gap-5 rounded-xl border-2 border-[#FB3FFF] px-5 py-2 text-left text-sm  hover:cursor-pointer md:w-[896px] md:px-10 md:py-7 md:text-xl '
          : ' z-20 grid w-full grid-cols-1 gap-5 rounded-xl  px-5 py-3 text-left text-sm shadow-lg  hover:cursor-pointer md:w-[896px] md:px-10 md:py-7 md:text-xl '
      }
      onClick={handleOpen}
    >
      <div className="flex w-full items-center justify-between">
        <h1 className=" color-[#131531] text-xs font-medium md:text-xl ">
          {title}
        </h1>
        <div
          className={
            open
              ? 'flex h-5 w-5 items-center justify-center rounded-full bg-[#FB3FFF] md:h-12 md:w-12'
              : 'flex h-5 w-5 items-center justify-center rounded-full shadow-md md:h-12 md:w-12'
          }
        >
          <DropDown
            direction={open ? 'down' : 'right'}
            className={
              open
                ? '  h-3 w-3 rotate-90 md:h-6 md:w-6 '
                : 'h-3 w-3 md:h-6 md:w-6'
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
