import React from 'react';

import clsxm from '@/lib/clsxm';
export interface InputGroupProps extends React.ComponentPropsWithRef<'input'> {
  containerClassName?: string;
  label?: string;
  error?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ containerClassName, label, error, ...props }, ref) => {
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
        {error && <label className="text-sm text-red-500">{error}</label>}
      </div>
    );
  },
);

export default InputGroup;
