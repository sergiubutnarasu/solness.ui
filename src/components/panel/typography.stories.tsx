// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import StorybookLayout from '../storybook-layout';
import Panel, { Props } from './panel.component';

export default {
  title: 'Components/Panel',
  component: Panel,
  argTypes: {
    title: { control: 'textbox' },
  },
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <StorybookLayout>
    <Panel {...args} title="Hello World">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, delectus.
    </Panel>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
