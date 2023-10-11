import { ButtonData, ImageData } from "../../types/types";
import { Button } from "../Button";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import { BlockWrapper } from "./BlockWrapper";

export type HeroProps = {
  header: string;
  text: string;
  image: ImageData;
  cta?: ButtonData;
  secondaryButton?: ButtonData;
};

export const Hero: React.FC<HeroProps> = ({
  header,
  text,
  cta,
  secondaryButton,
  image,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-12">
        <div className="flex flex-col gap-6 sm:max-lg:max-w-[50%] lg:max-w-[33rem]">
          <DisplayHeading tag="h1">{header}</DisplayHeading>
          <P>{text}</P>
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
        {image ? (
          <div className="w-full sm:w-[25rem] h-[34.5rem] bg-gray-300 lg:shrink-0">
            <img src={image.src} alt={image.alt} />
          </div>
        ) : null}
      </div>
    </BlockWrapper>
  );
};
