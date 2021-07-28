import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    title: { control: "text" },
    onChange: { action: "clicked" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    title={args.title}
    checked={!!args.checked}
    onChange={(val) => args?.onChange?.(val)}
    description={args.description}
  />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Title",
};
