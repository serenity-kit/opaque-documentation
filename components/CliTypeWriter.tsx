import { ComponentProps } from "react";
import cn from "clsx";
import { TypeAnimation } from "react-type-animation";

export type CliTypeWriterProps = ComponentProps<"div"> & {
  sequence?: (string | number)[];
  slow?: boolean;
  prompt?: boolean;
};

export const CliTypeWriter = ({
  sequence,
  slow,
  prompt,
  className,
  ...props
}: CliTypeWriterProps) => {
  const styles = {
    wrapper: "flex gap-3",
  };

  const typeSpeed = prompt || slow ? 40 : 80;

  return (
    <div className={cn(prompt && styles.wrapper, className)} {...props}>
      {prompt ? <div>&rarr;&nbsp;&sim;</div> : null}
      <div>
        <TypeAnimation sequence={sequence} speed={typeSpeed} cursor={false} />
      </div>
    </div>
  );
};
