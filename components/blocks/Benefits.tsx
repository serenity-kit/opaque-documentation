import cn from "clsx";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import { BlockWrapper } from "./BlockWrapper";

export type Feature = {
  header: string;
  text: string;
};

export type FeatureListProps = {
  header: string;
  features: [Feature, Feature, Feature];
};

export const Benefits: React.FC<FeatureListProps> = ({
  header,
  features,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <div className="flex justify-center">
        <DisplayHeading tag="h2" className="max-w-md md:max-w-xl pb-8 pt-14">
          {header}
        </DisplayHeading>
      </div>

      <div
        className={cn(
          "grid grid-cols-1 xs:grid-cols-2",
          features.length < 4 ? "md:grid-cols-3" : "md:grid-cols-4",
          "gap-6"
        )}
      >
        {features.map((feature, i) => {
          return (
            <div key={feature.header + `_${i}`} className="flex flex-col gap-2">
              <DisplayHeading tag="h4">{feature.header}</DisplayHeading>
              <P variant="secondary" className="text-lg">
                {feature.text}
              </P>
            </div>
          );
        })}
      </div>
    </BlockWrapper>
  );
};
