import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("sm:px-12 px-4 py-6 mb-10", className)}>
      {children}
    </div>
  );
};


