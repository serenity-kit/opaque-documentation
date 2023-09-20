import cn from "clsx";
import type { ComponentProps } from "react";

export const Th = ({ className = "", ...props }: ComponentProps<"th">) => (
  <th
    className={cn(
      "nx-m-0 py-3 px-4 nx-font-semibold text-left bg-gray-150 border-surface-border",
      "dark:bg-dark-surface-tertiary dark:border-dark-surface-border",
      "first:rounded-l-lg last:rounded-r-lg",
      className
    )}
    {...props}
  />
);
