import type { ReactNode } from 'react';

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return <div className="BackgroundContainer">{children}</div>;
};
