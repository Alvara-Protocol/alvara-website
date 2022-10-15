import React, { useEffect, useState } from 'react';
import { useQuery } from 'wagmi';

import clsxm from '@/lib/clsxm';
import { usePrevious } from '@/hooks';

import { CurrencyStatus, CurrencyStatusProps } from '@/components';

import { fetchETHPriceFromBackend } from '@/service';

import { generateCurrenciesData } from './mock';

export default function Currencies({ className }: { className?: string }) {
  const [currenciesData, setCurrenciesData] = useState<CurrencyStatusProps[]>(
    [],
  );
  useEffect(() => {
    setCurrenciesData(generateCurrenciesData(4));
  }, []);

  const { data } = useQuery(['ethPrice-realtime'], fetchETHPriceFromBackend, {
    refetchInterval: 1500,
  });

  const prevBalance = usePrevious(data || 0);

  return (
    <div
      className={clsxm([
        'border-gradient m-auto grid min-w-max grid-cols-[repeat(2,minmax(200px,1fr))] items-center justify-center gap-4 border bg-purple-300 p-2 md:grid-cols-4 md:gap-20 md:py-4 md:px-10',
        className,
      ])}
    >
      {currenciesData.map((currencyData) => (
        <CurrencyStatus
          key={`${currencyData.currency1}-${currencyData.currency2}`}
          {...currencyData}
          price={data || 0}
          changes={(data || 0) / prevBalance}
        />
      ))}
    </div>
  );
}
