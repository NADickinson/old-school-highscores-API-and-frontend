import type { ReactNode } from 'react';

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#F3F3F7] h-full w-full flex flex-col items-center">
      {children}
    </div>
  );
};
