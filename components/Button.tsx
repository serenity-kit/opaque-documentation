import { ComponentProps } from "react";
import cn from "clsx";
import { Icon, IconName } from "./icon/Icon";

export type ButtonProps = ComponentProps<"button"> & {
  variant: "primary" | "secondary";
  iconName?: IconName;
};

export const Button = ({
  children,
  iconName,
  variant,
  className,
  ...props
}: ButtonProps) => {
  const styles = {
    button:
      "flex items-center justify-center gap-2 h-12 w-full md:max-w-fit px-6 border-3 rounded cursor-pointer whitespace-nowrap" +
      " disabled:pointer-events-none disabled:cursor-default",
    primary:
      "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 border-primary-500 hover:border-primary-600 active:border-primary-700 focus-visible:border-primary-700" +
      " dark:bg-dark-primary-500 dark:hover:bg-primary-500 dark:active:bg-primary-600 dark:border-dark-primary-500 dark:hover:border-primary-500 dark:active:border-primary-600 dark:focus-visible:border-primary-600" +
      " disabled:bg-primary-100 disabled:text-primary-300 disabled:border-primary-100  disabled:dark:text-white disabled:dark:opacity-70",
    secondary:
      "bg-gray-900 hover:bg-gray-800 active:bg-gray-700 border-gray-900 hover:border-gray-800 active:border-gray-700 focus-visible:border-gray-700" +
      " dark:bg-gray-200 dark:hover:bg-gray-300 dark:active:bg-gray-400 dark:border-gray-200 dark:hover:border-gray-300 dark:active:border-gray-400 dark:focus-visible:border-gray-500 " +
      " disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300 disabled:dark:opacity-60",
    text: "text-white leading-normal font-medium",
  };

  return (
    <button
      type="button"
      className={cn(
        styles.button,
        variant == "primary" ? styles.primary : styles.secondary,
        styles.text,
        variant == "secondary" && "dark:text-dark-surface-primary",
        className
      )}
      {...props}
    >
      {iconName ? <Icon name={iconName} /> : null}
      {children}
    </button>
  );
};
