import { StoryFn } from "@storybook/react";
import UiButton from "./UiButton";

export default {
  title: "ui/buttons/UiButton",
  component: UiButton,
};

const Template: StoryFn<typeof UiButton> = (args) => <UiButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "UiButton",
};
