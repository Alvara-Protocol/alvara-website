import React, { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { CurrencyStatus, CurrencyStatusProps } from '@/components';

import { generateCurrenciesData } from './mock';

export default function Currencies({ className }: { className?: string }) {
  const [currenciesData, setCurrenciesData] = useState<CurrencyStatusProps[]>(
    [],
  );
  useEffect(() => {
    setCurrenciesData(generateCurrenciesData(4));
  }, []);
  return (
    <div
      className={clsxm([
        'border-gradient m-auto flex max-w-min flex-row items-center justify-center gap-20 border bg-purple-300 px-10 py-4',
        className,
      ])}
    >
      {currenciesData.map((currencyData) => (
        <CurrencyStatus
          key={`${currencyData.currency1}-${currencyData.currency2}`}
          {...currencyData}
        />
      ))}
    </div>
  );
}
