import { ComponentProps } from "react";
import cn from "clsx";

export type BlockWrapperProps = ComponentProps<"div">;

export const BlockWrapper: React.FC<BlockWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "h-[50rem] max-w-[67.5rem] mx-auto flex items-center",
        className
      )}
      {...props}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};
