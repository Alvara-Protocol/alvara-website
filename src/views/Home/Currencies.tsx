import React, { useEffect, useState } from 'react';

// import io from 'socket.io-client';
import clsxm from '@/lib/clsxm';

import { CurrencyStatus } from '@/components';

export interface RpcResponse {
  jsonrpc: string;
  id: number;
  method: string;
  result: Result;
}

export interface Result {
  channel: string;
  data?: Data;
}

export interface Data {
  slug: string;
  s: string;
  p: number;
  p24: null;
  v24: null;
  mc: null;
  t: number;
}

export interface CoinPrices {
  bitcoin: number;
  ethereum: number;
  bnb: number;
  xrp: number;
}

export default function Currencies({ className }: { className?: string }) {
  const [prices, setPrices] = useState<CoinPrices>({
    bitcoin: 0,
    ethereum: 0,
    bnb: 0,
    xrp: 0,
  });
  useEffect(() => {
    const socket = new WebSocket('wss://price-stream.crypto.com/ws/v2');

    socket.onopen = () => {
      const coinData = {
        jsonrpc: '2.0',
        method: 'subscribe',
        id: 1,
        params: {
          topic: 'token_price',
          slugs: ['bitcoin', 'ethereum', 'bnb', 'xrp'],
        },
      };
      socket.send(JSON.stringify(coinData));
    };

    socket.onmessage = (ev) => {
      const parsed: RpcResponse = JSON.parse(ev.data);
      const {
        result: { data, channel },
      } = parsed;
      if (!data || channel !== 'token_price') return;
      const { slug, p } = data;
      if (p === null) return;
      setPrices((prev) => ({ ...prev, [slug]: p }));
    };
  }, []);

  return (
    <div
      className={clsxm([
        'border-gradient  grid grid-cols-2 gap-3 border bg-gradient-to-r from-[#10122A] to-[#3F1960] py-2 md:min-w-max md:grid-cols-4   md:gap-20 md:p-2 md:py-6 md:px-10',
        className,
      ])}
    >
      <CurrencyStatus currency1="BTC" currency2="USD" price={prices.bitcoin} />
      <CurrencyStatus currency1="ETH" currency2="USD" price={prices.ethereum} />
      <CurrencyStatus currency1="BNB" currency2="USD" price={prices.bnb} />
      <CurrencyStatus currency1="XRP" currency2="USD" price={prices.xrp} />
    </div>
  );
}
