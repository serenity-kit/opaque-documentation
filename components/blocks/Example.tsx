import { ReactElement } from "react";
import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";

export type ExampleProps = ReactElement & {
  header: string;
  text: string;
  imageSrc: string;
};

export const Example = ({ header, text, imageSrc, ...props }: ExampleProps) => {
  return (
    <BlockWrapper className="text-center" {...props}>
      <DisplayHeading tag="h3" className="mb-4">
        {header}
      </DisplayHeading>
      <p className="text-gray-800 dark:text-gray-200 mb-10">{text}</p>
      <div className="w-full h-[25rem] md:h-[31.5rem]  bg-gray-300">
        <img src={imageSrc} />
      </div>
    </BlockWrapper>
  );
};
