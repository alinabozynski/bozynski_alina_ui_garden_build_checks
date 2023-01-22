import React from "react";
import { Story, Meta } from "@storybook/react";

import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Web Component Library/Dropdown",
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  label: "Default",
  item1: "item1",
  item2: "item2",
  item3: "item3",
  buttonBackgroundColor: "#bf74fd",
  menuBackgroundColor: "#e2c0ff",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  label: "Disabled",
  item1: "item1",
  item2: "item2",
  item3: "item3",
  buttonBackgroundColor: "#9b9b9b",
};
