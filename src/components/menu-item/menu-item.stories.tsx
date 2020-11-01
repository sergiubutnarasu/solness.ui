// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Color, Icon } from '../../enums';
import StorybookLayout from '../storybook-layout';
import MenuItem, { Props } from './menu-item.component';

export default {
  title: 'Components/Menu Item',
  component: MenuItem,
  argTypes: {
    active: { control: 'boolean' },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(Icon),
      },
    },
    iconColor: {
      control: {
        type: 'select',
        options: Object.keys(Color),
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <StorybookLayout>
    <MenuItem {...args} />
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {
  icon: 'home',
  iconColor: 'blue',
  children: 'Dashboard',
};
