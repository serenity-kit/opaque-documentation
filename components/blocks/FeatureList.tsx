import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import cn from "clsx";
import { Icon, IconName } from "../icon/Icon";

export type Feature = {
  iconName: IconName;
  header: string;
  text: string;
};

export type FeatureListProps = {
  header: string;
  features:
    | [Feature, Feature]
    | [Feature, Feature, Feature]
    | [Feature, Feature, Feature, Feature];
};

export const FeatureList: React.FC<FeatureListProps> = ({
  header,
  features,
  ...props
}) => {
  return (
    <BlockWrapper {...props}>
      <DisplayHeading tag="h3" className="max-w-md md:max-w-xl pb-14 md:pb-24">
        {header}
      </DisplayHeading>
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
              <Icon name={feature.iconName} size={8} />
              <DisplayHeading tag="h4">{feature.header}</DisplayHeading>
              <P variant="tertiary">{feature.text}</P>
            </div>
          );
        })}
      </div>
    </BlockWrapper>
  );
};
