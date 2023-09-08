import { ComponentProps } from "react";
import cn from "clsx";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary";
  iconName?: string;
};

export const Button = ({
  children,
  iconName,
  variant,
  ...props
}: ButtonProps) => {
  const styles = {
    button: "h-12 min-w-[5rem] max-w-fit px-6 border-3 rounded",
    primary:
      "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 hover:border-primary-600 active:border-primary-700 focus-visible:border-primary-700" +
      " dark:bg-dark-primary-500 dark:hover:bg-primary-500 dark:active:bg-primary-600 dark:border-dark-primary-500 dark:hover:border-primary-500 dark:active:border-primary-600 dark:focus-visible:border-primary-600 ",
    secondary:
      "bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border-gray-900 hover:border-gray-800 active:border-gray-700 focus-visible:border-gray-700" +
      " dark:bg-gray-200 dark:hover:bg-gray-300 dark:active:bg-gray-400 dark:border-gray-200 dark:hover:border-gray-300 dark:active:border-gray-400 dark:focus-visible:border-gray-500 ",
    text: "text-white leading-normal font-medium",
  };

  return (
    <button
      className={cn(
        styles.button,
        variant == "primary" ? styles.primary : styles.secondary,
        styles.text,
        variant == "secondary" && "dark:text-dark-surface-primary"
      )}
      {...props}
    >
      {/* TODO actually use iconName and svg */}
      {iconName ? <>icon</> : null}
      {children}
    </button>
  );
};
