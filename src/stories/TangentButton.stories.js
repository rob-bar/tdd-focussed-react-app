import React from "react";
import { TangentButton } from "../TangentButton";

export default {
  title: "Example/TangentWorksButton",
  component: TangentButton,
};

const Template = (args) => <TangentButton {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  color: "secondary",
};
