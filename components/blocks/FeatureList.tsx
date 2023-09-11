import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";
import { P } from "../P";
import cn from "clsx";

export type Feature = {
  iconName: string;
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
              {/* TODO use actual icons */}
              <div className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.3298 13.4968C17.9557 12.215 18.9995 10.2277 18.9995 7.99658H20.9995C20.9995 10.9686 19.559 13.6041 17.338 15.2431L19.8656 19.6209C20.4179 20.5775 20.0901 21.8007 19.1335 22.353L15.6068 16.2445C14.5025 16.7282 13.2823 16.9966 11.9995 16.9966C10.7167 16.9966 9.49663 16.7282 8.39229 16.2445L4.86557 22.353C3.90898 21.8007 3.58123 20.5775 4.13352 19.6209L9.19702 10.8507C8.45796 10.1249 7.99954 9.11427 7.99954 7.99658C7.99954 6.13274 9.27432 4.56664 10.9995 4.1226V1.99658H12.9995V4.1226C14.7248 4.56664 15.9995 6.13274 15.9995 7.99658C15.9995 9.11427 15.5411 10.1249 14.8021 10.8507L16.3298 13.4968ZM14.5986 14.4982L13.0705 11.8516C12.7297 11.9461 12.3705 11.9966 11.9995 11.9966C11.6286 11.9966 11.2694 11.9461 10.9286 11.8516L9.40053 14.4982C10.2041 14.8197 11.0812 14.9966 11.9995 14.9966C12.9179 14.9966 13.795 14.8197 14.5986 14.4982ZM11.9995 9.99658C13.1041 9.99658 13.9995 9.10115 13.9995 7.99658C13.9995 6.89201 13.1041 5.99658 11.9995 5.99658C10.895 5.99658 9.99954 6.89201 9.99954 7.99658C9.99954 9.10115 10.895 9.99658 11.9995 9.99658Z"
                  ></path>
                </svg>
              </div>
              <DisplayHeading tag="h4">{feature.header}</DisplayHeading>
              <P variant="tertiary">{feature.text}</P>
            </div>
          );
        })}
      </div>
    </BlockWrapper>
  );
};
