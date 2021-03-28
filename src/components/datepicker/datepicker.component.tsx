import React, { FunctionComponent, useEffect, useState } from 'react';
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

  useEffect(() => {
    setCurrentDate(value || new Date());
  }, [value]);

  const closeDropdown = () => setOpen(false);

  const handleChange = (newDate: Date) => {
    setCurrentDate(newDate);
    closeDropdown();
    onChange?.(newDate);
  };

  const inputTheme = `px-3 py-2 w-full text-sm leading-none appearance-none border border-gray-300 rounded-md focus:outline-none focus:border-gray-400`;

  return (
    <Dropdown
      persist
      open={open}
      menu={<Calendar value={currentDate} onChange={handleChange} />}
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
