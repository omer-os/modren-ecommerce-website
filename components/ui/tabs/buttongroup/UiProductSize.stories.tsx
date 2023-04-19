import { StoryFn } from "@storybook/react";
import UiProductSize from "./UiProductSize";

export default {
  title: "ui/product/UiProductSize",
  component: UiProductSize,
};

const Template: StoryFn<typeof UiProductSize> = (args) => (
  <UiProductSize {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sizes: ["S", "M", "L", "XL"],
};
