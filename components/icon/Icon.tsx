import React from "react";

import { ArrowRightLine } from "./icons/ArrowRightLine";
import { ArrowRightS } from "./icons/ArrowRightS";
import { BardFillTriple } from "./icons/BardFillTriple";
import { Compasses2Line } from "./icons/Compasses2";
import { GithubFill } from "./icons/GithubFill";
import { OpaqueKey } from "./icons/OpaqueKey";
import { Reset } from "./icons/Reset";

import { Color } from "../../types/types";
import cn from "clsx";

const getHexByColor = (color: Color): string => {
  const tailwindConfig = require(`../../tailwind.config`);
  return color.split("-").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, tailwindConfig.theme.colors);
};

export type IconName =
  | "arrow-right-line"
  | "arrow-right-s"
  | "bard-fill-triple"
  | "compasses-2-line"
  | "github-fill"
  | "opaque-key"
  | "reset";

export type IconProps = {
  name: IconName;
  color?: Color;
  size?: number | "full";
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 4,
  className,
  ...props
}) => {
  const color = getHexByColor(props.color ?? "current") as string;

  let icon: React.ReactNode = null;

  if (name === "arrow-right-line") {
    icon = <ArrowRightLine />;
  }

  if (name === "arrow-right-s") {
    icon = <ArrowRightS />;
  }

  if (name === "bard-fill-triple") {
    icon = <BardFillTriple />;
  }

  if (name === "compasses-2-line") {
    icon = <Compasses2Line />;
  }

  if (name === "github-fill") {
    icon = <GithubFill />;
  }

  if (name === "opaque-key") {
    icon = <OpaqueKey />;
  }

  if (name === "reset") {
    icon = <Reset />;
  }

  if (!icon) return null;

  return (
    <div
      className={cn("transition-all duration-500", className)}
      style={{
        height: `${size * 0.25}rem`,
        width: `${size * 0.25}rem`,
        color: color,
      }}
      {...props}
    >
      {icon}
    </div>
  );
};
