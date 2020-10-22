import { ReactElement } from 'react';

import { DatePickerLogic, InitDate } from '../../utils/datepicker/model';

export interface Button {
  className?: string;
  onClick?(): void;
  dateFragment?: number;
  children?: ReactElement;
}

export type Language = {
  MONTHS: string[];
  DAYS_OF_WEEK: string[];
};

export type SliceEndIndex = 1 | 2 | 3;

export interface CalendarProps extends Partial<DatePickerLogic> {
  language?: Language;
  sliceEndIndex?: SliceEndIndex;
  previousMonthArrow?: ReactElement<Button>;
  nextMonthArrow?: ReactElement<Button>;
  showPreviousMonthDays?: boolean;
  showNextMonthDays?: boolean;
  previousYearButton?: ReactElement<Button>;
  nextYearButton?: ReactElement<Button>;
  leftBound?: InitDate;
  rightBound?: InitDate;
}
