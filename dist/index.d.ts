import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    default?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

interface TextProps {
    error?: boolean;
    message?: string;
    success?: boolean;
    disabled?: boolean;
    placeholder?: string;
    borderColor?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

declare const Text: FC<TextProps>;

interface TableProps {
    default?: boolean;
    disabled?: boolean;
    headerBackground?: string;
    oddRowBackground?: string;
    evenRowBackground?: string;
    footerBackground?: string;
    caption?: string;
    heading1?: string;
    heading2?: string;
    heading3?: string;
    row1cell1?: string;
    row1cell2?: string;
    row1cell3?: string;
    row2cell1?: string;
    row2cell2?: string;
    row2cell3?: string;
    row3cell1?: string;
    row3cell2?: string;
    row3cell3?: string;
    footer1?: string;
    footer2?: string;
    footer3?: string;
}

declare const Table: FC<TableProps>;

interface RadioButtonProps {
    radioButtonLabel?: string;
    default?: boolean;
    disabled?: boolean;
    clickedColor?: string;
}

declare const RadioButton: FC<RadioButtonProps>;

interface LabelProps {
    default?: boolean;
    disabled?: boolean;
    label?: string;
    fontColor?: string;
}

declare const Label: FC<LabelProps>;

interface ImageProps {
    default?: boolean;
    disabled?: boolean;
    alt?: string;
    src?: File;
}

declare const Image: FC<ImageProps>;

interface HeroImageProps {
    default?: boolean;
    disabled?: boolean;
    message?: string;
    button?: string;
    buttonBackground?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const HeroImage: FC<HeroImageProps>;

interface DropdownProps {
    label?: string;
    item1?: string;
    item2?: string;
    item3?: string;
    default?: boolean;
    disabled?: boolean;
    buttonBackgroundColor?: string;
    menuBackgroundColor?: string;
}

declare const Dropdown: FC<DropdownProps>;

interface CardProps {
    default?: boolean;
    disabled?: boolean;
    headerMessage?: string;
    mainMessage?: string;
    footerMessage?: string;
    headerBackgroundColor?: string;
    bodyBackgroundColor?: string;
}

declare const Card: FC<CardProps>;

export { Button, Card, Dropdown, HeroImage, Image, Label, RadioButton, Table, Text };
