import cn from "clsx";
import type { ComponentProps } from "react";

export const Td = ({ className = "", ...props }: ComponentProps<"td">) => (
  <td
    className={cn(
      "nx-m-0 py-3 px-4 border-b border-surface-border dark:border-dark-surface-border",
      className
    )}
    {...props}
  />
);
