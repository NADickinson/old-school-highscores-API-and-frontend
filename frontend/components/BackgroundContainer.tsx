import type { ReactNode } from 'react';

export const BackgroundContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#313649] h-full w-full flex flex-col items-center">
      {children}
    </div>
  );
};
