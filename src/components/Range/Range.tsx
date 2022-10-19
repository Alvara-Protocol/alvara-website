import humanFormat from 'human-format';
import React from 'react';

import clsxm from '@/lib/clsxm';

export interface RangeProps extends React.ComponentPropsWithRef<'input'> {
  containerClassName?: string;
  currentValue: number | string;
}

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ containerClassName, currentValue, ...props }, ref) => {
    return (
      <div className={clsxm(containerClassName, 'w-full')}>
        <div className="mb-1 text-[18px] font-medium">
          $
          {props.disabled
            ? 0
            : humanFormat(
                typeof currentValue === 'string'
                  ? parseFloat(currentValue)
                  : currentValue,
              )}
        </div>
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
            props.onChange?.(e);
          }}
        />
        <div className="flex items-center justify-between text-[12px]">
          <div>${humanFormat(parseFloat(props.min?.toString() || ''))}</div>
          <div>${humanFormat(parseFloat(props.max?.toString() || ''))}</div>
        </div>
      </div>
    );
  },
);

export default Range;
