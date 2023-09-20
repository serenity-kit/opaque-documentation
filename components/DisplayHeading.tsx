import cn from "clsx";
import type { ComponentProps } from "react";

export type DisplayProps = ComponentProps<"h1"> & {
  tag: `h${1 | 2 | 3 | 4}`;
};

export const DisplayHeading: React.FC<DisplayProps> = ({
  tag: Tag,
  children,
  className,
  ...props
}) => {
  const styles = {
    h1: "text-mobile1 md:text-display1 font-dodrantbold tracking-[-0.02em]",
    h2: "text-mobile2 md:text-display2 font-dodrantbold tracking-[-0.015em]",
    h3: "text-mobile3 md:text-display3 font-dodrantbold tracking-[-0.01em]",
    h4: "text-display4 font-semibold",
  };

  return (
    <Tag
      className={cn(
        styles[Tag],
        // Problem: we either go layout "raw" on index _meta, but then the block components won't stand a chance specificity-wise
        // against the css in styled context when used anywhere else
        // => therefore we rather add a class "op-custom" to problematic elements, so they are not overruled
        "text-black dark:text-white op-custom",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
