import { ReactElement } from "react";
import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";

export type ComparisonData = {
  title: string;
  points: Array<string>;
};

// TODO data needs to be 2 (or max 3?)
export type ComparisonProps = ReactElement & {
  header: string;
  text: string;
  comparisonData: Array<ComparisonData>;
};

export const Comparison = ({
  header,
  text,
  comparisonData,
  ...props
}: ComparisonProps) => {
  return (
    <BlockWrapper className="text-center" {...props}>
      <DisplayHeading tag="h3" className="mb-4">
        {header}
      </DisplayHeading>
      <p className="text-text-tertiary dark:text-dark-text-tertiary mb-10">{text}</p>
      <div className="flex gap-4 overflow-x-scroll">
        {comparisonData.map((data, i) => {
          return (
            <div
              className="w-full min-w-[15rem] pb-12 border border-surface-border dark:border-dark-surface-border rounded-2xl overflow-hidden"
              key={data.title + `${i}`}
            >
              <div className="flex items-center h-10 mb-3 px-5 bg-surface-secondary dark:bg-dark-surface-secondary border-b border-surface-border dark:border-dark-surface-border">
                <DisplayHeading tag="h3" className="text-lg md:text-lg">
                  {data.title}
                </DisplayHeading>
              </div>
              {data.points.map((point, i) => {
                return (
                  <p className="py-1 px-5 text-left" key={data.point + `${i}`}>
                    {point}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </BlockWrapper>
  );
};
