import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import { ImageData } from "../../types/types";

export type ExampleProps = {
  header: string;
  text: string;
  image: ImageData;
};

export const Example: React.FC<ExampleProps> = ({
  header,
  text,
  image,
  ...props
}) => {
  return (
    <BlockWrapper className="text-center" {...props}>
      <DisplayHeading tag="h3" className="mb-4">
        {header}
      </DisplayHeading>
      <P className="mb-10" variant="tertiary">
        {text}
      </P>
      <div className="w-full h-[25rem] md:h-[31.5rem] bg-gray-300">
        <img src={image.src} alt={image.alt} />
      </div>
    </BlockWrapper>
  );
};
