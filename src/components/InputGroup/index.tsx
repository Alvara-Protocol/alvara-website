import React from 'react';

import clsxm from '@/lib/clsxm';
export interface InputGroupProps extends React.ComponentPropsWithRef<'input'> {
  containerClassName?: string;
  label?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ containerClassName, label, ...props }, ref) => {
    return (
      <div className={containerClassName}>
        {label && (
          <label htmlFor={props.id} className=" block">
            {label}
            {props.required && <span className="text-fuchsia-450">*</span>}
          </label>
        )}
        <input
          ref={ref}
          {...props}
          className={clsxm(
            props.className,
            'border-gradient block w-full border px-4 py-2 outline-none',
          )}
        />
      </div>
    );
  },
);

export default InputGroup;
