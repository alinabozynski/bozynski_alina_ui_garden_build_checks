import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Web Component Library/Text",
  component: Input,
} as Meta<typeof Text>;

const Template: Story<TextProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  disabled: false,
  placeholder: "Default",
  borderColor: "#353637",
};

export const Success = Template.bind({});
Success.args = {
  error: false,
  success: true,
  disabled: false,
  placeholder: "Success",
  borderColor: "#067d68",
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  disabled: false,
  placeholder: "Error",
  borderColor: "#a9150b",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Disabled",
  borderColor: "#e4e3ea",
};
