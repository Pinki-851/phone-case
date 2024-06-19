import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}
export function MaxWidthWrapper(props: MaxWidthWrapperProps) {
  const { children } = props;
  return (
    <div className={cn("h-full mx-auto w-ull max-w-screen-xl px-2 md:px-20")}>
      {children}
    </div>
  );
}
