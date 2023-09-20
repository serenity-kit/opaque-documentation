import cn from "clsx";
import type { ComponentProps } from "react";

export type PProps = ComponentProps<"p"> & {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "base";
};

export const P: React.FC<PProps> = ({
  variant = "secondary",
  size = "base",
  className = "",
  children,
  ...props
}) => {
  const styles = {
    p: `text-${size} leading-6`,
    primary: "text-text-primary dark:text-dark-text-primary",
    secondary: "text-text-secondary dark:text-dark-text-secondary",
    tertiary: "text-text-tertiary dark:text-dark-text-tertiary",
  };

  return (
    <p className={cn(styles.p, styles[variant], className)} {...props}>
      {children}
    </p>
  );
};
