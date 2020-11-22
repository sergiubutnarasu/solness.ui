// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Color, Size } from '../../enums';
import StorybookLayout from '../storybook-layout';
import Button, { Props } from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
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
    <Button {...args} icon="plus">
      Click me
    </Button>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
