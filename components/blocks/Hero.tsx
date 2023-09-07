import { ReactElement } from "react";
import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";
import { Button } from "../Button";

export type ButtonType = {
  text: string;
  onClick: () => void;
  iconName?: string;
};

export type HeroProps = ReactElement & {
  header: string;
  text: string;
  imageSrc: string;
  cta: ButtonType;
  secondaryButton?: ButtonType;
};

export const Hero = ({
  header,
  text,
  cta,
  secondaryButton,
  imageSrc,
  ...props
}: HeroProps) => {
  return (
    <BlockWrapper {...props}>
      <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-12">
        <div className="flex flex-col gap-6 sm:max-lg:max-w-[50%] lg:max-w-[33rem]">
          <DisplayHeading tag="h1">{header}</DisplayHeading>
          <p className="text-gray-800 dark:text-gray-200">{text}</p>
          <div className="flex gap-2">
            <Button
              onClick={cta.onClick}
              variant="primary"
              iconName={cta.iconName || null}
            >
              {cta.text}
            </Button>
            {secondaryButton ? (
              <Button
                onClick={secondaryButton.onClick}
                variant="secondary"
                iconName={secondaryButton.iconName || null}
              >
                {secondaryButton.text}
              </Button>
            ) : null}
          </div>
        </div>
        {/* TODO remove height */}
        <div className="w-full sm:w-[25rem] h-[34.5rem] bg-gray-300 lg:shrink-0">
          <img src={imageSrc} />
        </div>
      </div>
    </BlockWrapper>
  );
};
