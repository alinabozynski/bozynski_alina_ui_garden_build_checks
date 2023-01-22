import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Web Component Library/Button",
  component: Button,
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  text: "Default",
  backgroundColor: "#6bedb5",
};

export const Secondary = Template.bind({});
Secondary.args = {
  default: false,
  disabled: false,
  text: "Secondary",
  backgroundColor: "#1b116e",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  text: "Disabled",
  backgroundColor: "#B5B5B5",
};

export const Small = Template.bind({});
Small.args = {
  default: false,
  disabled: false,
  size: "small",
  text: "Small",
  backgroundColor: "#1b116e",
};

export const Medium = Template.bind({});
Medium.args = {
  default: false,
  disabled: false,
  size: "medium",
  text: "Medium",
  backgroundColor: "#1b116e",
};

export const Large = Template.bind({});
Large.args = {
  default: false,
  disabled: false,
  size: "large",
  text: "Large",
  backgroundColor: "#1b116e",
};
