import React, { FunctionComponent, ReactNode } from 'react';
import Typography from '../typography';

export interface Props {
  children: ReactNode;
  isToday?: boolean;
  isFromPreviousMonth?: boolean;
}

const CalendarItem: FunctionComponent<Props> = ({
  children,
  isToday = false,
  isFromPreviousMonth = false,
}) => {
  const defaultTheme =
    'flex items-center justify-center w-7 h-7 cursor-pointer rounded-full hover:bg-indigo-100';

  const todayTheme = isToday ? 'border border-gray-300' : '';
  const previousTextColor = isFromPreviousMonth ? 'gray' : 'black';
  const theme = `${defaultTheme} ${todayTheme}`;

  return (
    <div className={theme}>
      <Typography size="xsmall" color={previousTextColor}>
        {children}
      </Typography>
    </div>
  );
};

export default CalendarItem;
