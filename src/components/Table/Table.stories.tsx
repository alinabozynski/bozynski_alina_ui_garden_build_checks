import React from "react";
import { Story, Meta } from "@storybook/react";

import Table from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Web Component Library/Table",
  component: Table,
} as Meta<typeof Table>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  default: true,
  disabled: false,
  headerBackground: "#d267fe",
  oddRowBackground: "#eabeff",
  evenRowBackground: "#fae3ff",
  footerBackground: "#fae3ff",
  caption: "Default",
  heading1: "FirstName",
  heading2: "LastName",
  heading3: "Age",
  row1cell1: "FirstName1",
  row1cell2: "LastName1",
  row1cell3: "31",
  row2cell1: "FirstName2",
  row2cell2: "LastName2",
  row2cell3: "19",
  row3cell1: "FirstName3",
  row3cell2: "LastName3",
  row3cell3: "46",
  footer1: "3 Names",
  footer2: "3 Names",
  footer3: "3 Ages",
};

export const Disabled = Template.bind({});
Disabled.args = {
  default: false,
  disabled: true,
  headerBackground: "#828282",
  oddRowBackground: "#bfbfbf",
  evenRowBackground: "#9c9c9c",
  footerBackground: "#9c9c9c",
  caption: "Disabled",
  heading1: "FirstName",
  heading2: "LastName",
  heading3: "Age",
  row1cell1: "FirstName1",
  row1cell2: "LastName1",
  row1cell3: "31",
  row2cell1: "FirstName2",
  row2cell2: "LastName2",
  row2cell3: "19",
  row3cell1: "FirstName3",
  row3cell2: "LastName3",
  row3cell3: "46",
  footer1: "3 Names",
  footer2: "3 Names",
  footer3: "3 Ages",
};
