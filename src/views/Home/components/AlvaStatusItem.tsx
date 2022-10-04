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
      <span className="text-center font-montserrat text-[40px] font-normal tracking-widest">
        ${price}
      </span>
      <div className="relative h-[5px] w-[340px] bg-dark-blue-400">
        <div
          className="absolute top-0 left-0 h-[5px] bg-gradient-to-r from-fuchsia-450 to-purple-650"
          style={{ width: `${percent * 340}px` }}
        />
      </div>
      <span className="text-center uppercase text-stone-600">
        {description}
      </span>
    </div>
  );
}
