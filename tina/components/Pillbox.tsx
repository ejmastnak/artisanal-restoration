import type { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Pillbox({className, children}: Props) {
  return (
    <span className={`inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-800 ring-1 ring-inset ring-orange-800/30 ${className ?? ""}`}>{children}</span>
  );
}
