import Chance from 'chance';

import { CurrencyStatusProps } from '@/components';

const chance = new Chance();

export const generateCurrenciesData = (
  count: number,
): CurrencyStatusProps[] => {
  let i = 0;
  const result: CurrencyStatusProps[] = [];
  for (i = 0; i < count; i++) {
    result.push({
      currency1: chance.currency().code,
      currency2: chance.currency().code,
      price: chance.integer({ min: 25000, max: 100000 }),
    });
  }
  return result;
};
