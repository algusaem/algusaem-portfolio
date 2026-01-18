import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MainSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
}

const MainSection = forwardRef<HTMLElement, MainSectionProps>(
  ({ children, className, id, onMouseMove }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "w-full max-w-5xl px-6 pt-16 pb-12 scroll-mt-2",
          className
        )}
        onMouseMove={onMouseMove}
      >
        {children}
      </section>
    );
  }
);

MainSection.displayName = "MainSection";

export default MainSection;
