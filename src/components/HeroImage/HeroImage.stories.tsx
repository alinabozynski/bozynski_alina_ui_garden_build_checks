import React from "react";
import { Story, Meta } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Web Component Library/HeroImage",
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  message: "Welcome!",
  button: "Get Started",
  buttonBackground: "#639392",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  message: "Welcome!",
  button: "Get Started",
  buttonBackground: "#888787",
};
