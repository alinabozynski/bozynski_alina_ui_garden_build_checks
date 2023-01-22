import React from "react";
import { Story, Meta } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Web Component Library/Label",
  component: Label,
  argTypes: {},
} as Meta<typeof Label>;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  label: "Default",
  fontColor: "#080808",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  label: "Disabled",
  fontColor: "#000",
};
