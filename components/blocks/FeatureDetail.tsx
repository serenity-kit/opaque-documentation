import { ReactElement } from "react";
import { BlockWrapper } from "./BlockWrapper";
import { DisplayHeading } from "../DisplayHeading";
import cn from "clsx";

export type Link = {
  text: string;
  href: string;
  external?: boolean;
};

export type FeatureDetailProps = ReactElement & {
  header: string;
  text: string;
  imageSrc: string;
  link?: Link;
  imagePosition?: "left" | "right";
};

export const FeatureDetail = ({
  header,
  text,
  link,
  imageSrc,
  imagePosition = "right",
  ...props
}: FeatureDetailProps) => {
  return (
    <BlockWrapper {...props}>
      <div
        className={cn(
          "flex flex-col",
          // when using responsive prefixes we have to write them out so tailwind can parse them,
          // otherwise tailwind won't translate it as it is built before
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse",
          "justify-between gap-6 md:gap-12"
        )}
      >
        <div className="flex flex-col gap-2 w-full max-w-xxs">
          <DisplayHeading tag="h3">{header}</DisplayHeading>
          <p className="text-gray-600 dark:text-gray-500">{text}</p>
          {link ? (
            <a
              className="text-primary-500 dark:text-primary-dark-400 inline-flex items-center"
              href={link.href}
            >
              {link.text}
              {link.external ? (
                <div className="ml-1.5 h-3">
                  {/* todo extract icons */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_204_149)">
                      <path
                        d="M9.1287 5.24968L5.1057 1.22667L6.16635 0.166016L12 5.99968L6.16635 11.8333L5.1057 10.7726L9.1287 6.74968H0V5.24968H9.1287Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_204_149">
                        <rect width="12" height="12" fill="transparent" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ) : null}
            </a>
          ) : null}
        </div>
        {/* TODO remove fixed height maybe and let picture define that */}
        <div className="w-full max-w-[41rem] h-[30rem] bg-gray-300">
          <img src={imageSrc} />
        </div>
      </div>
    </BlockWrapper>
  );
};
