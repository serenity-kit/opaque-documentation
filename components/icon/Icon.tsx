import React from "react";

import { ArrowRightLine } from "./icons/ArrowRightLine";
import { Compasses2Line } from "./icons/Compasses2";
import { GithubFill } from "./icons/GithubFill";

import { Color } from "../../types/types";
import cn from "clsx";

const getHexByColor = (color: Color): string => {
  const tailwindConfig = require(`../../tailwind.config`);
  return color.split("-").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, tailwindConfig.theme.colors);
};

export type IconName = "arrow-right-line" | "compasses-2-line" | "github-fill";

export type IconProps = {
  name: IconName;
  color?: Color;
  size?: number | "full";
};

export const Icon: React.FC<IconProps> = ({ name, size = 4, ...props }) => {
  const color = getHexByColor(props.color ?? "current") as string;

  let icon: React.ReactNode = null;

  if (name === "arrow-right-line") {
    icon = <ArrowRightLine />;
  }

  if (name === "compasses-2-line") {
    icon = <Compasses2Line />;
  }

  if (name === "github-fill") {
    icon = <GithubFill />;
  }

  if (!icon) return null;

  return (
    <div
      className={cn(props.className)}
      style={{
        height: `${size * 0.25}rem`,
        width: `${size * 0.25}rem`,
        color: color,
      }}
    >
      {icon}
    </div>
  );
};
