import type { ReactNode } from "react";

interface PostGridCardProps {
  children: ReactNode;
};

export function PostGridCard({ children }: PostGridCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto w-full max-w-7xl px-8">
      {children}
    </div>
  );
};