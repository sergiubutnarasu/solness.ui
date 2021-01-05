import React, { FunctionComponent, useState } from 'react';
import Dropdown from '../dropdown';
import Icon from '../icon';
import Calendar from '../calendar';
import moment from 'moment';
import Typography from '../typography';

export interface Props {
  value?: Date;
  onChange?: (date: Date) => void;
}

const Datepicker: FunctionComponent<Props> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value || new Date());

  const closeDropdown = () => setOpen(false);
  const inputTheme = `px-3 py-2 w-full text-sm leading-none appearance-none border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100`;

  return (
    <Dropdown
      persist
      open={open}
      menu={
        <Calendar
          value={currentDate}
          onChange={(newDate) => {
            setCurrentDate(newDate);
            closeDropdown();
            onChange?.(newDate);
          }}
        />
      }
      onClose={() => {
        closeDropdown();
      }}
    >
      <button
        type="button"
        className={inputTheme}
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center">
          <Typography size="small">
            {moment(currentDate).format('DD/MM/yyyy')}
          </Typography>
          <span className="ml-2">
            <Icon icon="calendar" size="small" color="indigo"></Icon>
          </span>
        </span>
      </button>
    </Dropdown>
  );
};

export default Datepicker;
