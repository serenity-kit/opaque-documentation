import { DisplayHeading } from "../DisplayHeading";
import { BlockWrapper } from "./BlockWrapper";

export type FeatureListProps = {
  header: string;
  children: React.ReactNode;
};

export const Content: React.FC<FeatureListProps> = ({
  header,
  children,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <div className="flex justify-center">
        <DisplayHeading tag="h2" className="max-w-md md:max-w-xl pb-8 pt-14">
          {header}
        </DisplayHeading>
      </div>

      <div className="flex flex-col items-center">{children}</div>
    </BlockWrapper>
  );
};
