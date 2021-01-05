import React, { FunctionComponent } from 'react';
import Typography from '../typography';

export interface Props {
  day: number;
  isToday?: boolean;
  isFromPreviousMonth?: boolean;
  isSelected?: boolean;
  onSelect?: (day: number) => void;
}

const CalendarItem: FunctionComponent<Props> = ({
  day,
  isToday = false,
  isFromPreviousMonth = false,
  isSelected = false,
  onSelect,
}) => {
  const defaultTheme =
    'flex items-center justify-center w-7 h-7 cursor-pointer rounded-full hover:bg-indigo-100';

  const todayTheme = isToday ? 'border border-gray-300' : '';
  const selectedTheme = isSelected ? 'bg-blue-500' : '';
  const textColor = isSelected
    ? 'white'
    : isFromPreviousMonth
    ? 'gray'
    : 'black';
  const theme = `${defaultTheme} ${todayTheme} ${selectedTheme}`;

  return (
    <div className={theme} onClick={() => onSelect?.(day)}>
      <Typography size="xsmall" color={textColor}>
        {day}
      </Typography>
    </div>
  );
};

export default CalendarItem;
