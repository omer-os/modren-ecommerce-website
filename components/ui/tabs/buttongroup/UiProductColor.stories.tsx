import { StoryFn } from "@storybook/react";
import UiProductColor from "./UiProductColor";

export default {
  title: "ui/product/UiProductColor",
  component: UiProductColor,
};

const Template: StoryFn<typeof UiProductColor> = (args) => (
  <UiProductColor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colors: ["#DC2626", "#E891B2", "#10B981", "#0EA5E9"],
};
