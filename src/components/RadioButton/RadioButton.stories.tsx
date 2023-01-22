import React from "react";
import { Story, Meta } from "@storybook/react";

import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Web Component Library/RadioButton",
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  radioButtonLabel: "Default",
  clickedColor: "#32f53e",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  radioButtonLabel: "Disabled",
};
