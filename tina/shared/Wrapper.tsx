import type { ReactNode } from "react";

interface Props {
  classes: string;
  children: ReactNode;
}

export default function Wrapper({ classes, children }: Props) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-10 ${classes ? classes : ''}`} >
      {children}
    </div>
  );
}
