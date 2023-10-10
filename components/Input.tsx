import { ComponentProps } from "react";
import cn from "clsx";

export type InputProps = ComponentProps<"input"> & {};

export const Input = ({ children, ...props }: InputProps) => {
  const styles = {
    input:
      "h-12 min-w-[5rem] px-4 border border-gray-300 dark:border-gray-700 focus:dark:ring-primary-400/70 focus:dark:ring-offset-primary-400/70 rounded",
    disabled: "opacity-70",
  };

  return (
    <input
      type="text"
      className={cn(
        styles.input,
        props.disabled && styles.disabled,
        props.className
      )}
      {...props}
    />
  );
};
