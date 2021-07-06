import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner, LogoSpinner } from "./";

export default {
  title: "Spinners",
  component: Spinner,
  argTypes: {
    classNames: { control: "text" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner classNames={args.classNames ?? ""} size={args.size} />
);
const LogoTemplate: ComponentStory<typeof LogoSpinner> = (args) => (
  <LogoSpinner classNames={args.classNames ?? ""} size={args.size} />
);

export const Circle = Template.bind({});

export const Logo = LogoTemplate.bind({});
