export type ButtonData = {
    text: string;
    onClick: () => void;
    iconName?: string;
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