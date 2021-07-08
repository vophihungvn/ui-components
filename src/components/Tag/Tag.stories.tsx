import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from "./Tag";

export default {
  title: "Tags",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "New",
  className: "text-blue-700 bg-blue-50",
};
