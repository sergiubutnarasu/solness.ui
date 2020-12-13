// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import StorybookLayout from '../storybook-layout';
import Datepicker, { Props } from './datepicker.component';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {},
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <StorybookLayout>
    <Datepicker {...args} />
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
