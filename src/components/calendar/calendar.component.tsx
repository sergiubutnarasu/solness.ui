import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import Button from '../button';
import CalendarItem from '../calendar-item';
import Typography from '../typography';
import { DAYS, MONTHS } from './calendar.config';
import moment from 'moment';

const CalendarDays: FunctionComponent = () => (
  <>
    {DAYS.map((day, index) => (
      <div key={index} className="flex items-center justify-center w-7 h-7">
        <Typography size="xsmall" weight="semibold">
          {day}
        </Typography>
      </div>
    ))}
  </>
);

export interface Props {
  value?: Date;
  onChange?: (date: Date) => void;
}

const Calendar: FunctionComponent<Props> = ({ value, onChange }) => {
  const today = new Date();
  const [currentValue, setCurrentValue] = useState(value ?? today);
  const [currentDate, setCurrentDate] = useState(currentValue);

  useEffect(() => {
    const newValue = value ?? new Date();
    setCurrentValue(newValue);
    setCurrentDate(newValue);
  }, [value]);

  const { previousDays, currentDays } = useMemo(() => {
    const momentDate = moment(currentDate);

    const daysInMonth = momentDate.daysInMonth();
    const firstDate = momentDate.startOf('month').toDate().getDay();
    const lastPreviousMonthDays = momentDate.add(-1, 'months').daysInMonth();
    const previousDays = [];

    for (let i = 1; i <= firstDate; i++) {
      previousDays.push(lastPreviousMonthDays - firstDate + i);
    }

    const currentDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      currentDays.push(i);
    }

    return { previousDays, currentDays };
  }, [currentDate]);

  const checkIsToday = (day: number) => {
    const momentDate = moment(new Date()).startOf('day');

    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );

    return momentDate.isSame(date);
  };

  const checkSelected = (day: number, isFromPreviousMonth = false) => {
    const momentDate = moment(currentValue).startOf('day');

    const fromDate = isFromPreviousMonth
      ? moment(currentDate).add(-1, 'month').toDate()
      : currentDate;

    const date = new Date(fromDate.getFullYear(), fromDate.getMonth(), day);

    return momentDate.isSame(date);
  };

  const handleSelect = (day: number, isFromPreviousMonth = false) => {
    const fromDate = isFromPreviousMonth
      ? moment(currentDate).add(-1, 'month').toDate()
      : currentDate;

    const date = new Date(fromDate.getFullYear(), fromDate.getMonth(), day);

    setCurrentValue(date);
    onChange?.(date);
  };

  const goToNextMonth = () =>
    setCurrentDate(moment(currentDate).add(1, 'month').toDate());

  const goToPreviousMonth = () =>
    setCurrentDate(moment(currentDate).add(-1, 'month').toDate());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="inline-grid gap-1 grid-cols-7 w-auto items-center">
      <div className="flex gap-1 col-span-5">
        <Typography size="base" weight="bold">
          {MONTHS[currentMonth]}
        </Typography>
        <Typography size="base" color="gray" weight="normal">
          {currentYear}
        </Typography>
      </div>

      <div>
        <Button
          transparent
          iconColor="gray"
          size="small"
          icon="left"
          onClick={goToPreviousMonth}
        />
      </div>

      <div>
        <Button
          transparent
          iconColor="gray"
          size="small"
          icon="right"
          onClick={goToNextMonth}
        />
      </div>

      <CalendarDays />

      {previousDays.map((day) => (
        <CalendarItem
          key={day}
          isFromPreviousMonth
          day={day}
          isSelected={checkSelected(day, true)}
          onSelect={() => handleSelect(day, true)}
        />
      ))}

      {currentDays.map((day) => (
        <CalendarItem
          isToday={checkIsToday(day)}
          isSelected={checkSelected(day)}
          key={day}
          day={day}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default Calendar;
