// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import Layout from '../layout';
import StorybookLayout from '../storybook-layout';
import Menu from './modal.component';
import Button from '../button';
import Modal from './modal.component';

export default {
  title: 'Components/Modal',
  component: Menu,
  argTypes: {},
} as Meta;

const Template: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <StorybookLayout>
      <Layout>
        <Button onClick={openModal}>Open modal</Button>

        {isOpen && (
          <Modal
            open={isOpen}
            title="Modal title"
            size="medium"
            onClose={closeModal}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, nam!
          </Modal>
        )}
      </Layout>
    </StorybookLayout>
  );
};

export const Default = Template.bind({});
Default.args = {};
