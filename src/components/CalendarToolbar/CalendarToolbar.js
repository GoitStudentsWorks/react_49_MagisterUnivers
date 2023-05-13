import React from 'react';
import { PeriodPaginator } from './PeriodPaginator';

export const CalendarToolbar = ({
  title,
  prevButtonProps,
  nextButtonProps,
  className,
}) => {
  return (
    <div className={`${className} flex justify-between`}>
      <PeriodPaginator
        {...{
          title,
          prevButtonProps,
          nextButtonProps,
        }}
      />
    </div>
  );
};
