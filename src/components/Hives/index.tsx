import React from 'react';

export interface HivesProps extends React.PropsWithChildren {
  className?: string;
}

export default function Hives({ children, className }: HivesProps) {
  return (
    <section
      className={'bg-gradient-to-b from-[#3F1960] to-transparent ' + className}
    >
      {children}
    </section>
  );
}
