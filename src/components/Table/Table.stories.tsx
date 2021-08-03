import { ComponentStory, ComponentMeta } from "@storybook/react";
import faker from "faker";

import { Table } from ".";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    classNames: { control: "text" },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table
    data={Array(30)
      .fill(0)
      .map((_, idx) => ({
        id: faker.finance.account(),
        name: faker.name.firstName(),
        account: faker.finance.accountName(),
        amount: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(Number(faker.finance.amount())),
        state: faker.address.state(),
      }))}
    columns={[
      {
        title: "ID",
        index: "id",
      },
      {
        title: "Name",
        index: "name",
        sort: true,
        render: (value) => <strong>{value}</strong>,
      },
      {
        title: "State",
        index: "state",
        filter: true,
      },
      {
        title: "Account name",
        index: "account",
      },
      {
        title: "Amount",
        index: "amount",
      },
    ]}
  />
);

export const Primary = Template.bind({});
