import React from 'react';

import clsxm from '@/lib/clsxm';
import { usePrevious } from '@/hooks';

import { TriangleIcon } from '@/components/Svg';

export interface CurrencyStatusProps {
  currency1: string;
  currency2: string;
  price: number;
}

export default function CurrencyStatus({
  currency1,
  currency2,
  price,
}: CurrencyStatusProps) {
  const prevPrice = usePrevious(price);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center gap-2">
        <div
          className={clsxm(
            'inline-flex items-center gap-1',
            price >= prevPrice ? ['text-green-400'] : 'text-red-400',
          )}
        >
          <TriangleIcon
            className={clsxm(price >= prevPrice ? '' : 'rotate-180')}
          />
          {((price / prevPrice) * 100 - 100).toFixed(2)}%
        </div>
        <div className="text-gray-400">{`${currency1}/${currency2}`}</div>
      </div>
      <div className="font-poppins text-base font-normal leading-5 text-gray-400 md:text-2xl">
        {price.toLocaleString()}
      </div>
    </div>
  );
}
