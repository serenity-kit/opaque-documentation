import { ReactElement } from "react";
import cn from "clsx";

export type BlockWrapperProps = ReactElement & {};

export const BlockWrapper = ({
  className,
  children,
  ...props
}: BlockWrapperProps) => {
  return (
    <div
      className={cn(
        "h-[50rem] max-w-[67.5rem] mx-auto bg-gray-150 flex items-center",
        className
      )}
      {...props}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};
