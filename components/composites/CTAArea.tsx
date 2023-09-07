import { ReactElement } from "react";
import { ButtonType } from "../blocks/Hero";
import { DisplayHeading } from "../DisplayHeading";
import { Button } from "../Button";

export type CTAAreaProps = ReactElement & {
  header: string;
  text: string;
  cta: ButtonType;
};

export const CTAArea = ({ header, text, cta, ...props }: CTAAreaProps) => {
  return (
    <div
      className="h-[26rem] w-full my-5 flex justify-center items-center rounded-2xl bg-gray-300 text-center cta-gradient"
      {...props}
    >
      <div className="flex flex-col items-center gap-4">
        <DisplayHeading tag="h3">{header}</DisplayHeading>
        <p className="max-w-[70%] text-white">{text}</p>
        <Button
          onClick={cta.onClick}
          iconName={cta.iconName || null}
          variant="primary"
        >
          {cta.text}
        </Button>
      </div>
    </div>
  );
};
