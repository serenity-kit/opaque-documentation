import { colors } from "../tailwind.config.js";
import { IconName } from "../components/icon/Icon.jsx";

export type Color = SLeaves<typeof colors>;

export type ButtonData = {
    text: string;
    onClick: () => void;
    iconName?: IconName;
};

export type LinkData = {
    text: string;
    href: string;
    external?: boolean;
};

export type ImageData = {
    src: string;
    alt: string;
};

/*
 * join nested Object-keys with '-'
 *
 * input:
 *   collaboration: {
 *      terracotta: "#EF5245",
 *      coral: "#FD7064",
 *      ...
 *   }
 *
 * output:
 *   collaboration-terracotta, collaboration-coral, ...
 */
type SJoin<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "-"}${P}`
    : never
  : never;

/*
 * convert Object-keys to Type
 *
 * input:
 *   collaboration: {
 *      terracotta: "#EF5245",
 *      coral: "#FD7064",
 *      ...
 *   }
 *
 * output:
 *   "collaboration-terracotta" | "collaboration-coral" | ...
 */
export type SLeaves<T> = T extends object
  ? { [K in keyof T]-?: SJoin<K, SLeaves<T[K]>> }[keyof T]
  : "";