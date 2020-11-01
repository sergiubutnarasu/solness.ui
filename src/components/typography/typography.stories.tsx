// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Color, Size, Weight } from '../../enums';
import StorybookLayout from '../storybook-layout';
import Typography, { Props } from './typography.component';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    underline: { control: 'boolean' },
    weight: {
      control: {
        type: 'select',
        options: Object.keys(Weight),
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

const Template: Story<Props> = ({ ...args }) => (
  <StorybookLayout>
    <Typography {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, delectus.
    </Typography>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
