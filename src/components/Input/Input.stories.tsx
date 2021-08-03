import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, Search } from ".";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    // enabled: { act},
    onChange: { action: "clicked" },
    onSearch: { action: "clicked" },
    classnames: {
      defaultValue: [],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input
    id={args.id}
    onChange={(val) => args?.onChange?.(val)}
    classname={args.classname}
  />
);

const SearchTemplate: ComponentStory<typeof Search> = (args) => (
  <div className="w-56">
    <Search
      id={args.id}
      onChange={(val) => args?.onChange?.(val)}
      classname={args.classname}
      onSearch={args.onSearch}
    />
  </div>
);

export const Primary = Template.bind({});

export const SearchInput = SearchTemplate.bind({});
