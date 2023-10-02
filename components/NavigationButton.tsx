import { ComponentProps } from "react";
import cn from "clsx";
import { Icon, IconName } from "./icon/Icon";

export type NavigationButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  active?: boolean;
  iconName?: IconName;
};

export const NavigationButton = ({
  children,
  iconName,
  variant = "secondary",
  active = false,
  className,
  ...props
}: NavigationButtonProps) => {
  const styles = {
    button:
      "flex items-center justify-center gap-2 h-9 max-w-fit text-xs px-4 border-[1.5px] rounded cursor-pointer whitespace-nowrap" +
      " dark:disabled:opacity-60 disabled:cursor-default" +
      " transition-all duration-500",
    outlined:
      "bg-transparent hover:bg-gray-150 active:bg-gray-200 border-gray-800 focus-visible:border-[2.5px]" +
      " dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:border-gray-200",
    primary:
      "bg-primary-500 border-3 hover:bg-primary-600 active:bg-primary-700 border-primary-500 hover:border-primary-600 active:border-primary-700 focus-visible:border-primary-700" +
      " dark:bg-dark-primary-500 dark:hover:bg-primary-500 dark:active:bg-primary-600 dark:border-dark-primary-500 dark:hover:border-primary-500 dark:active:border-primary-600 dark:focus-visible:border-primary-600 ",
    secondary:
      "bg-gray-900 border-3 hover:bg-gray-800 active:bg-gray-700 border-gray-900 hover:border-gray-800 active:border-gray-700 focus-visible:border-gray-700" +
      " dark:bg-gray-200 dark:hover:bg-gray-300 dark:active:bg-gray-400 dark:border-gray-200 dark:hover:border-gray-300 dark:active:border-gray-400 dark:focus-visible:border-gray-500 ",
    text: cn(
      "leading-normal font-semibold",
      active
        ? "text-white"
        : "text-gray-800 disabled:text-gray-500 dark:text-gray-200"
    ),
  };

  return (
    <button
      type="button"
      className={cn(
        styles.button,
        !active && !props.disabled && styles.outlined,
        active && (variant == "primary" ? styles.primary : styles.secondary),
        active && variant == "secondary" && "enabled:dark:text-gray-900",
        styles.text,
        className
      )}
      {...props}
    >
      {iconName ? <Icon name={iconName} /> : null}
      {children}
    </button>
  );
};
