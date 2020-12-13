import React, { FunctionComponent } from 'react';
import Dropdown from '../dropdown';
import Button from '../button';
import Calendar from '../calendar';

export interface Props {
  value?: Date;
}

const Datepicker: FunctionComponent<Props> = ({ value }) => {
  return (
    <Dropdown persist menu={<Calendar value={value} />}>
      <Button
        size="small"
        color="white"
        icon="calendar"
        iconPosition="right"
        iconColor="indigo"
      >
        26/01/2020
      </Button>
    </Dropdown>
  );
};

export default Datepicker;
