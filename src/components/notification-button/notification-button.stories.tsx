// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Color, Size } from '../../enums';
import StorybookLayout from '../storybook-layout';
import NotificationButton, { Props } from './notification-button.component';

export default {
  title: 'Components/Notification Button',
  component: NotificationButton,
  argTypes: {
    enabled: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: Object.keys(Size),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(Color),
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <StorybookLayout>
    <NotificationButton {...args} />
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};

export const Enabled = Template.bind({});
Enabled.args = {
  ...Default.args,
  enabled: true,
};
