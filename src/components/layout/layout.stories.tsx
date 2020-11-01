// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar from '../avatar';
import Icon from '../icon/icon.component';
import Logo from '../logo';
import Menu from '../menu';
import MenuItem from '../menu-item';
import NotificationButton from '../notification-button';
import Panel from '../panel';
import StorybookLayout from '../storybook-layout';
import Typography from '../typography';
import Layout, { Props } from './layout.component';

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {},
} as Meta;

const MenuBlock = (
  <Menu>
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
);

const Template: Story<Props> = () => (
  <StorybookLayout>
    <Layout menu={MenuBlock}>
      <div className="rounded-lg shadow-lg bg-indigo-500 p-8 mb-8">
        <Typography size="large" color="white" weight="semibold">
          Welcome back, Sergiu Butnarasu!
        </Typography>
        <Typography as="span" size="small" color="white">
          You have 6 unread{' '}
          <Typography as="span" underline size="small" color="white">
            notifications
          </Typography>{' '}
          and 3 new{' '}
          <Typography as="span" underline size="small" color="white">
            documents
          </Typography>
        </Typography>
      </div>
      <div className="flex gap-8 items-start">
        <Panel title="Team">
          <div>
            <Typography size="large" weight="bold" color="indigo">
              Core Squad
            </Typography>
            <div className="flex justify-between">
              <Typography size="small" color="gray">
                Software Developer
              </Typography>
              <div className="ml-2">
                <Typography size="small" color="gray">
                  5 member
                </Typography>
              </div>
            </div>
          </div>
        </Panel>

        <Panel title="Inventory">
          <Typography size="large" weight="bold">
            9 items available
          </Typography>
          <Typography size="small" color="gray">
            No item requested
          </Typography>
        </Panel>
      </div>

      <Panel title="Documents">
        <>
          <div className="bg-gray-200 px-4 py-3 rounded-md mb-1">
            <div className="flex items-center">
              <div className="w-1/2">
                <Typography size="small">Holidays.doc</Typography>
              </div>
              <div className="w-1/2">
                <Typography size="small" color="gray">
                  by Sergiu Butnarasu
                </Typography>
              </div>
              <div className="w-1/6">
                <Typography size="small" color="gray">
                  1.4 MB
                </Typography>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <Icon icon="dots" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 px-4 py-3 rounded-md mb-1">
            <div className="flex items-center">
              <div className="w-1/2">
                <Typography size="small">Resume.doc</Typography>
              </div>
              <div className="w-1/2">
                <Typography size="small" color="gray">
                  by Della Case
                </Typography>
              </div>
              <div className="w-1/6">
                <Typography size="small" color="gray">
                  2.1 MB
                </Typography>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <Icon icon="dots" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 px-4 py-3 rounded-md mb-1">
            <div className="flex items-center">
              <div className="w-1/2">
                <Typography size="small">Confidential.pdf</Typography>
              </div>
              <div className="w-1/2">
                <Typography size="small" color="gray">
                  by John Smith
                </Typography>
              </div>
              <div className="w-1/6">
                <Typography size="small" color="gray">
                  0.7 MB
                </Typography>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <Icon icon="dots" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 px-4 py-3 rounded-md mb-1">
            <div className="flex items-center">
              <div className="w-1/2">
                <Typography size="small">About_Company.ppt</Typography>
              </div>
              <div className="w-1/2">
                <Typography size="small" color="gray">
                  by Alexander Tween
                </Typography>
              </div>
              <div className="w-1/6">
                <Typography size="small" color="gray">
                  1.9 MB
                </Typography>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <Icon icon="dots" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 px-4 py-3 rounded-md mb-1">
            <div className="flex items-center">
              <div className="w-1/2">
                <Typography size="small">Reports.doc</Typography>
              </div>
              <div className="w-1/2">
                <Typography size="small" color="gray">
                  by Sergiu Butnarasu
                </Typography>
              </div>
              <div className="w-1/6">
                <Typography size="small" color="gray">
                  4.6 MB
                </Typography>
              </div>
              <div className="w-1/6 flex items-center justify-end">
                <Icon icon="dots" color="gray" />
              </div>
            </div>
          </div>
        </>
      </Panel>
    </Layout>
  </StorybookLayout>
);

export const Default = Template.bind({});
Default.args = {};
