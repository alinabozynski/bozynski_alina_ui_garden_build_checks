import { MouseEventHandler } from "react";
export interface HeroImageProps {
    default?: boolean;
    disabled?: boolean;
    message?: string;
    button?: string;
    buttonBackground?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
