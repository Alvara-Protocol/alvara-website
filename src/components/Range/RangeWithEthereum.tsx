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
    <div className="grid grid-cols-12 items-center">
      <Range
        ref={ref}
        {...props}
        containerClassName="col-start-1 col-end-10"
        onChange={(e) => {
          setValue(parseInt(e.target.value));
          props.onChange?.(e);
        }}
      />
      <div className="col-start-10 col-end-11 mx-2 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-400 p-2">
        <EthereumIcon />
      </div>
      <div className="col-start-11 col-end-13 bg-gray-400 px-4 py-2 text-center">
        {props.disabled ? (
          <>-</>
        ) : (
          <>
            {rate ? `${(value / rate).toFixed(2)} ETH` : 'Unable to calculate'}
            <br />
            {`${(value / tokenPriceInUsd).toFixed(2)} ALVRs`}
          </>
        )}
      </div>
    </div>
  );
});

export default RangeWithEthereum;
