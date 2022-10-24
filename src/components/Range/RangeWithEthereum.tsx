import React, { useCallback, useEffect, useState } from 'react';

import NextImage from '@/components/NextImage';
import { EthereumIcon } from '@/components/Svg';

import Range, { RangeProps } from './Range';

export interface RangeWithEthereumProps extends RangeProps {
  rate?: number;
  tokenPriceInUsd: number;
  setValue: (v: number) => void;
}

const RangeWithEthereum = React.forwardRef<
  HTMLInputElement,
  RangeWithEthereumProps
>(({ rate, tokenPriceInUsd, currentValue = 0, setValue, ...props }, ref) => {
  const [ethValue, setEthValue] = useState<any>(0);

  const parsedEthMin =
    props.min !== undefined && rate !== undefined
      ? (typeof props.min === 'string' ? parseFloat(props.min) : props.min) /
        rate
      : 0;

  const parsedEthMax =
    props.max !== undefined && rate !== undefined
      ? (typeof props.max === 'string' ? parseFloat(props.max) : props.max) /
        rate
      : 0;

  const handleEthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!rate) return;
      const parsed = parseFloat(e.target.value);
      if (!isNaN(parsed)) {
        if (parsedEthMin <= parsed && parsed <= parsedEthMax)
          setValue(parseFloat(e.target.value) * rate);
      }
      setEthValue(e.target.value);
    },
    [rate, parsedEthMin, parsedEthMax, setValue],
  );

  useEffect(() => {
    if (props.disabled) setEthValue(0);
    else if (rate)
      setEthValue(
        (
          (typeof currentValue === 'string'
            ? parseFloat(currentValue)
            : currentValue) / rate
        ).toFixed(2),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.disabled]);

  return (
    <div className="relative mt-5 grid grid-cols-12 items-center">
      <Range
        ref={ref}
        {...props}
        containerClassName="col-span-12 lg:col-start-1 lg:col-end-9"
        onChange={(e) => {
          // Update eth input value
          if (rate) setEthValue((parseFloat(e.target.value) / rate).toFixed(2));
          props.onChange?.(e);
        }}
        currentValue={currentValue}
      />

      <div className="col-start-1 col-end-13 grid grid-cols-2 gap-2 lg:col-start-10 lg:col-end-13">
        <div className="inline-flex items-center gap-2 text-center font-medium">
          <EthereumIcon className="h-6 w-6" />
          <input
            type="string"
            min={
              props.min !== undefined && rate !== undefined
                ? (typeof props.min === 'string'
                    ? parseFloat(props.min)
                    : props.min) / rate
                : 0
            }
            max={
              props.max !== undefined && rate !== undefined
                ? (typeof props.max === 'string'
                    ? parseFloat(props.max)
                    : props.max) / rate
                : undefined
            }
            className="border-gradient block w-full border px-4 py-2 outline-none"
            onChange={handleEthChange}
            value={ethValue}
            disabled={props.disabled}
          />
        </div>
        <div className="inline-flex items-center gap-2 bg-gray-400 p-2 text-center font-medium">
          <NextImage src="/images/logo.png" alt="ALVA" width={24} height={24} />
          <p className="text-xs">
            {props.disabled
              ? '-'
              : `${(
                  (typeof currentValue === 'string'
                    ? parseFloat(currentValue)
                    : currentValue) / tokenPriceInUsd
                ).toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
});

export default RangeWithEthereum;
