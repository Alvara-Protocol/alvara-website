import React, { useState } from 'react';

import { EthereumIcon } from '@/components/Svg';

import Range, { RangeProps } from './Range';

export interface RangeWithEthereumProps extends RangeProps {
  rate?: number;
  tokenPriceInUsd: number;
}

const RangeWithEthereum = React.forwardRef<
  HTMLInputElement,
  RangeWithEthereumProps
>(({ rate, tokenPriceInUsd, ...props }, ref) => {
  const [value, setValue] = useState(0);
  return (
    <div className="mt-5 grid grid-cols-12 items-center">
      <Range
        ref={ref}
        {...props}
        containerClassName="col-start-1 col-end-9"
        onChange={(e) => {
          setValue(parseInt(e.target.value));
          props.onChange?.(e);
        }}
      />
      <div className="col-start-9 col-end-10 mx-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 p-2">
        <EthereumIcon className="w-[20px]" />
      </div>
      <div className="col-start-10 col-end-13 grid grid-cols-2">
        <div className="text-center font-medium">
          <p className="text-[18px]">ETH</p>
          <p className="mt-3 bg-gray-400 text-[12px]">
            {props.disabled
              ? '-'
              : rate
              ? `${(value / rate).toFixed(2)}`
              : 'Unable to calculate'}
          </p>
        </div>
        <div className="ml-1.5 text-center font-medium">
          <p className="text-[18px]">ALVR</p>
          <p className="mt-3 bg-gray-400 text-[12px]">
            {props.disabled ? '-' : `${(value / tokenPriceInUsd).toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
});

export default RangeWithEthereum;
