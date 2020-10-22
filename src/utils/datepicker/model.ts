import { ReactElement } from 'react';

import { CalendarProps } from '../../components/calendar';

export type Date = {
  year: number;
  month: number;
  day: number;
  dayOfWeek: number;
};

export interface DatePickerProps {
  date: Date;
  setDate(date: Date): void;
  leftBound?: InitDate;
  rightBound?: InitDate;
  ignoreErrors?: boolean;
  children: ReactElement<CalendarProps>;
}

export interface DatePickerLogic {
  date: Date;
  previousYear: number;
  nextYear: number;
  nextMonth: number;
  previousMonth: number;
  setNextYear(): void;
  setPreviousYear(): void;
  setNextMonth(): void;
  setPreviousMonth(): void;
  setDay(day: number): void;
  setNextMonthDay(day: number): void;
  setPreviousMonthDay(day: number): void;
  previousMonthDays: number[];
  currentMonthDays: number[];
  nextMonthDays: number[];
}

export type Days =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type Months = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type InitDate = {
  year: number;
  month?: Months;
  day?: Days;
};
