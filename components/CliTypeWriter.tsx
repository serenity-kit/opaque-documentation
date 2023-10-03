import { ComponentProps } from "react";
import cn from "clsx";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "./icon/Icon";

export type CliTypeWriterProps = ComponentProps<"div"> & {
  sequence?: (string | number)[];
  slow?: boolean;
  prompt?: boolean;
  comment?: boolean;
};

export const CliTypeWriter = ({
  sequence,
  slow,
  prompt,
  comment,
  className,
  ...props
}: CliTypeWriterProps) => {
  const styles = {
    prompt: "flex gap-3 font-bold tracking-wider",
    comment: "italic",
  };

  const typeSpeed = prompt || slow ? 40 : 80;

  return (
    <div
      className={cn(
        prompt && styles.prompt,
        comment && styles.comment,
        className
      )}
      {...props}
    >
      {prompt ? (
        <div className="flex">
          <Icon name="opaque-key" color="white" />
          &nbsp;<span className={"text-color-actor"}>&sim;</span>
        </div>
      ) : null}
      <div>
        <TypeAnimation sequence={sequence} speed={typeSpeed} cursor={false} />
      </div>
    </div>
  );
};
