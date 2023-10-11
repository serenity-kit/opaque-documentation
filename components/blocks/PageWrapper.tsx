import cn from "clsx";
import { ComponentProps } from "react";

export type PageWrapperProps = ComponentProps<"div">;

export const PageWrapper: React.FC<PageWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("max-w-[67.5rem] mx-auto flex items-center", className)}
      {...props}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};
