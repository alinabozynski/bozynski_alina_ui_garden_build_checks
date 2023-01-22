import { MouseEventHandler } from "react";
export interface ButtonProps {
    text?: string;
    default?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
