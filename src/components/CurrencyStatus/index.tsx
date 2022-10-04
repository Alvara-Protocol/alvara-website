import React from 'react';

import clsxm from '@/lib/clsxm';
import { usePrevious } from '@/hooks';

import { TriangleIcon } from '@/components/Svg';

export interface CurrencyStatusProps {
  currency1: string;
  currency2: string;
  changes: number;
  price: number;
}

export default function CurrencyStatus({
  currency1,
  currency2,
  changes,
  price,
}: CurrencyStatusProps) {
  const prevChanges = usePrevious(changes);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="inline-flex items-center gap-2">
        <div
          className={clsxm(
            'inline-flex items-center gap-1',
            changes >= prevChanges && ['text-green-400'],
          )}
        >
          <TriangleIcon />
          {changes}%
        </div>
        <div>{`${currency1}/${currency2}`}</div>
      </div>
      <div className="font-poppins text-[36px] font-normal leading-5 text-dark-blue-400">
        {price.toLocaleString()}
      </div>
    </div>
  );
}
