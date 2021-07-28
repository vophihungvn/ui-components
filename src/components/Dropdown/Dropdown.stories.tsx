import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from ".";
import { Checkbox } from "../Checkbox";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown
    button="Dropdown"
    items={[
      "Item 1",
      <div>
        <Checkbox title="Checkbox" />
      </div>,
    ]}
  />
);

export const Primary = Template.bind({});
