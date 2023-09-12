import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("sm:tw-px-12 tw-px-4 tw-py-6 tw-mb-10", className)}>
      {children}
    </div>
  );
};

export default ContentContainer;
