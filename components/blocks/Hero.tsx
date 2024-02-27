import { ButtonData } from "../../types/types";
import { Button } from "../Button";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import { BlockWrapper } from "./BlockWrapper";

export type HeroProps = {
  header: string;
  text?: string;
  eyeCatcherChildren?: React.ReactNode;
  cta?: ButtonData;
  secondaryButton?: ButtonData;
  children?: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = ({
  header,
  text,
  cta,
  secondaryButton,
  eyeCatcherChildren,
  children,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex flex-col gap-6 sm:max-lg:max-w-[50%] lg:max-w-[26rem]">
          <DisplayHeading tag="h1">{header}</DisplayHeading>
          {text ? <P>{text}</P> : null}
          {children}
          <div className="flex gap-2">
            {cta ? (
              <Button
                onClick={cta.onClick}
                variant="primary"
                iconName={cta.iconName || null}
              >
                {cta.text}
              </Button>
            ) : null}
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
        {eyeCatcherChildren ? (
          <div className="w-full sm:w-[35rem] lg:shrink-0">
            {eyeCatcherChildren}
          </div>
        ) : null}
      </div>
    </BlockWrapper>
  );
};
