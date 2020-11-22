// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar, { Props } from './avatar.component';
import StorybookLayout from '../storybook-layout';
import { Size } from '../../enums';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    showOptions: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: Object.keys(Size),
      },
    },
  },
} as Meta;

const Template: Story<Props> = ({ size = 'base', ...args }) => (
  <StorybookLayout>
    <Avatar
      size={size}
      {...args}
      url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
    />
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
