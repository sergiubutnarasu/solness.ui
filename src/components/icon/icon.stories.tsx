// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Color, Icon as IconEnum, Size } from '../../enums';
import StorybookLayout from '../storybook-layout';
import Icon, { Props } from './icon.component';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(IconEnum),
      },
    },
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

const Template: Story<Props> = ({ icon = 'bell', ...args }) => (
  <StorybookLayout>
    <Icon icon={icon} size="xlarge" {...args} />
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
