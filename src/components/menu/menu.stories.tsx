// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar from '../avatar';
import Layout from '../layout';
import Logo from '../logo';
import MenuItem from '../menu-item';
import NotificationButton from '../notification-button';
import StorybookLayout from '../storybook-layout';
import Menu, { Props } from './menu.component';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story<Props> = (args) => (
  <StorybookLayout>
    <Layout>
      <Menu {...args}>
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <NotificationButton enabled />
        </div>

        <div className="flex justify-center mb-8 ">
          <Avatar
            showOptions
            title="Sergiu Butnarasu"
            description="Software Developer"
            size="extra"
            url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
          />
        </div>

        <MenuItem active icon="home" iconColor="blue">
          Dashboard
        </MenuItem>
        <MenuItem icon="office" iconColor="orange">
          Offices
        </MenuItem>
        <MenuItem icon="users" iconColor="purple">
          Users
        </MenuItem>
        <MenuItem icon="documents" iconColor="teal">
          Documents
        </MenuItem>
        <MenuItem icon="briefcase" iconColor="red">
          Inventory
        </MenuItem>
        <MenuItem icon="calendar" iconColor="indigo">
          Calendar
        </MenuItem>
      </Menu>
    </Layout>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
