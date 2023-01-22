import React from "react";
import { Story, Meta } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Web Component Library/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  headerMessage: "Default",
  mainMessage: "Information",
  footerMessage: "Footer",
  headerBackgroundColor: "#639392",
  bodyBackgroundColor: "#c3fff6",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  headerMessage: "Disabled",
  mainMessage: "Information",
  footerMessage: "Footer",
  headerBackgroundColor: "#989898",
  bodyBackgroundColor: "#b2b2b2",
};
