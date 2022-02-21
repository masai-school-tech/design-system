import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import Text from "./Text";
import { FontSize } from "@masaischooltech/foundation";

import "@masaischooltech/scss/lib/atoms/Text.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atoms/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = () => (
  <Text size={select("FontSize", Object.values(FontSize), "sm")}>Hello</Text>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Text Component",
};
