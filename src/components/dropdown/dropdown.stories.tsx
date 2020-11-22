// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import StorybookLayout from '../storybook-layout';
import Typography from '../typography';
import Button from '../button';
import Dropdown, { Props } from './dropdown.component';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta;

const Template: Story<Props> = ({ ...args }) => (
  <StorybookLayout>
    <Dropdown
      {...args}
      menu={
        <Typography size="small">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          illo.
        </Typography>
      }
    >
      <Button icon="down" size="small" iconPosition="right">
        Dropdown
      </Button>
    </Dropdown>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
