import { StoryFn } from "@storybook/react";
import Chip from "./Chip";

export default {
  title: "ui/Chips",
  component: Chip,
};

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
};
