import humanFormat from 'human-format';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

export interface RangeProps extends React.ComponentPropsWithRef<'input'> {
  containerClassName?: string;
}

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ containerClassName, ...props }, ref) => {
    const [value, setValue] = useState(0);
    return (
      <div className={clsxm(containerClassName, 'w-full')}>
        <div>${humanFormat(value)}</div>
        <input
          ref={ref}
          type="range"
          {...props}
          className={clsxm(
            'range',
            props.className,
            !props.disabled && 'range-primary',
          )}
          onChange={(e) => {
            setValue(parseInt(e.target.value));
            props.onChange?.(e);
          }}
        />
        <div className="flex items-center justify-between">
          <div>${humanFormat(parseFloat(props.min?.toString() || ''))}</div>
          <div>${humanFormat(parseFloat(props.max?.toString() || ''))}</div>
        </div>
      </div>
    );
  },
);

export default Range;
