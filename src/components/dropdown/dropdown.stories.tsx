// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '../button';
import MenuItem from '../menu-item';
import StorybookLayout from '../storybook-layout';
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
        <div className="w-36">
          <MenuItem size="small">Option 1</MenuItem>
          <MenuItem size="small">Option 2</MenuItem>
          <MenuItem size="small">Option 3</MenuItem>
          <MenuItem size="small">Option 4</MenuItem>
          <MenuItem size="small">Option 5</MenuItem>
        </div>
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
