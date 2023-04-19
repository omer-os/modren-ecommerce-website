import { StoryFn } from "@storybook/react";
import UiAvatar from "./UiAvatar";

export default {
  title: "ui/Avatars/Avatar",
  component: UiAvatar,
};

const Template: StoryFn<typeof UiAvatar> = (args) => <UiAvatar {...args} />;
export const Default = Template.bind({});
Default.args = {
  src: "https://images.unsplash.com/photo-1681483476977-322d81693e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
};
