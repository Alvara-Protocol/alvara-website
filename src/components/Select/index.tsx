import React from 'react';

import clsxm from '@/lib/clsxm';

export interface SelectProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  containerClassName?: string;
}

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ label, containerClassName, ...props }, ref) => {
    return (
      <div
        className={clsxm('inline-flex items-center gap-2', containerClassName)}
      >
        <span className="font-montserrat text-sm font-medium">{label}</span>
        <input
          ref={ref}
          type="checkbox"
          value=""
          className="toggle"
          {...props}
        />
      </div>
    );
  },
);

export default Select;
