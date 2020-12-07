// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Avatar from '../avatar';
import Button from '../button';
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
    <Layout
      menu={MenuBlock}
      sidebar={
        <div className="w-76 py-10 pr-10">
          <Panel
            title="Next Event"
            color="blue"
            titleColor="white"
            actions={<Button transparent size="small" icon="plus" />}
          >
            <>
              <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
                <div className="flex items-start">
                  <div className="w-1/3">
                    <Typography size="small" color="white">
                      10:30 AM
                    </Typography>
                    <Typography size="xsmall" color="gray">
                      24 June
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography size="small" color="white">
                      Morning daily scrum
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
                <div className="flex items-start">
                  <div className="w-1/3">
                    <Typography size="small" color="white">
                      11:30 AM
                    </Typography>
                    <Typography size="xsmall" color="gray">
                      24 June
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography size="small" color="white">
                      Sprint retrospectives
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-white-opacity rounded-md mb-1">
                <div className="flex items-start">
                  <div className="w-1/3">
                    <Typography size="small" color="white">
                      02:30 PM
                    </Typography>
                    <Typography size="xsmall" color="gray">
                      24 June
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography size="small" color="white">
                      Sprint planning
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-white-opacity rounded-md">
                <div className="flex items-start">
                  <div className="w-1/3">
                    <Typography size="small" color="white">
                      03:30 PM
                    </Typography>
                    <Typography size="xsmall" color="gray">
                      24 June
                    </Typography>
                  </div>
                  <div className="w-2/3">
                    <Typography size="small" color="white">
                      Team synchronization
                    </Typography>
                  </div>
                </div>
              </div>
            </>
          </Panel>

          <Panel title="Team Members">
            <>
              <div className="flex items-center mb-4">
                <div className="w-1/5 flex justify-start">
                  <Avatar
                    size="base"
                    url="https://en.gravatar.com/userimage/128015720/b81c215fc33e0db0461f4974d2d2cabf.jpg?size=200"
                  />
                </div>
                <div className="w-4/5">
                  <Typography size="small" weight="semibold">
                    Sergiu Butnarasu
                  </Typography>
                  <Typography size="xsmall" color="gray">
                    Software Developer
                  </Typography>
                </div>
                <div className="w-1/5 flex items-center justify-end">
                  <Icon icon="dots" size="small" color="gray" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-1/5 flex justify-start">
                  <Avatar
                    size="base"
                    url="https://randomuser.me/api/portraits/women/44.jpg"
                  />
                </div>
                <div className="w-4/5">
                  <Typography size="small" weight="semibold">
                    June Cha
                  </Typography>
                  <Typography size="xsmall" color="gray">
                    Graphic Designer
                  </Typography>
                </div>
                <div className="w-1/5 flex items-center justify-end">
                  <Icon icon="dots" size="small" color="gray" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-1/5 flex justify-start">
                  <Avatar
                    size="base"
                    url="https://randomuser.me/api/portraits/women/95.jpg"
                  />
                </div>
                <div className="w-4/5">
                  <Typography size="small" weight="semibold">
                    Lucrecia Calder
                  </Typography>
                  <Typography size="xsmall" color="gray">
                    Software Developer
                  </Typography>
                </div>
                <div className="w-1/5 flex items-center justify-end">
                  <Icon icon="dots" size="small" color="gray" />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="w-1/5 flex justify-start">
                  <Avatar
                    size="base"
                    url="https://randomuser.me/api/portraits/men/36.jpg"
                  />
                </div>
                <div className="w-4/5">
                  <Typography size="small" weight="semibold">
                    Oscar Thomsen
                  </Typography>
                  <Typography size="xsmall" color="gray">
                    Software Developer
                  </Typography>
                </div>
                <div className="w-1/5 flex items-center justify-end">
                  <Icon icon="dots" size="small" color="gray" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/5 flex justify-start">
                  <Avatar
                    size="base"
                    url="https://randomuser.me/api/portraits/women/65.jpg"
                  />
                </div>
                <div className="w-4/5">
                  <Typography size="small" weight="semibold">
                    Renee Sims
                  </Typography>
                  <Typography size="xsmall" color="gray">
                    Web Designer
                  </Typography>
                </div>
                <div className="w-1/5 flex items-center justify-end">
                  <Icon icon="dots" size="small" color="gray" />
                </div>
              </div>
            </>
          </Panel>
        </div>
      }
    >
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

      <Panel
        title="Documents"
        actions={
          <>
            <Button size="small" icon="plus" />
            <Button size="small" icon="download" iconPosition="right" />
          </>
        }
      >
        <>
          <div className="bg-gray-50 p-4 rounded-md mb-1">
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
                <Icon icon="dots" size="small" color="gray" />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md mb-1">
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
                <Icon icon="dots" size="small" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-1">
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
                <Icon icon="dots" size="small" color="gray" />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-md mb-1">
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
                <Icon icon="dots" size="small" color="gray" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-1">
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
                <Icon icon="dots" size="small" color="gray" />
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
