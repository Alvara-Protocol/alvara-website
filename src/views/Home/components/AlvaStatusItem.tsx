import React from 'react';

export interface AlvaStatusItemProps {
  price: string;
  percent: number;
  description: string;
}

export default function AlvaStatusItem({
  price,
  percent,
  description,
}: AlvaStatusItemProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-center font-montserrat text-xl font-normal tracking-widest md:text-2xl">
        {price}
      </span>
      <div className="relative h-[3px] w-[340px] bg-dark-blue-400">
        <div
          className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-fuchsia-450 to-purple-650"
          style={{ width: `${percent * 340}px` }}
        />
      </div>
      <span className="text-center uppercase text-stone-600">
        {description}
      </span>
    </div>
  );
}
