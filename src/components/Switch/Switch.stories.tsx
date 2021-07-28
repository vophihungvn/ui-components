import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Switch } from ".";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    // enabled: { act},
    onChange: { action: "clicked" },
    classnames: {
      defaultValue: [],
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => (
  <Switch
    enabled={args.enabled}
    onChange={(val) => args?.onChange?.(val)}
    activeColor={args.activeColor}
    ringColor={args.ringColor}
    classname={args.classname ?? []}
  />
);

export const Primary = Template.bind({});
