import { Story, Meta } from "@storybook/react";
import { TextProps } from "./Text.types";
declare const _default: Meta<{
    new (data?: string | undefined): Text;
    prototype: Text;
}>;
export default _default;
export declare const Default: Story<TextProps>;
export declare const Success: Story<TextProps>;
export declare const Error: Story<TextProps>;
export declare const Disabled: Story<TextProps>;
