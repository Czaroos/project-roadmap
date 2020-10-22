import React, { useEffect, useState, cloneElement } from 'react';

import * as M from './model';

import { validateBounds, validateDate } from './utils/validators';

import { getDayOfWeek, isLeapYear } from './utils/date';

import { useLeftBound, useRightBound } from './utils/bounds';

const defaultLeftBound = useLeftBound({ year: 1900 });
const defaultRightBound = useRightBound({ year: 2100 });

export const DatePicker = ({
  date,
  setDate,
  leftBound = defaultLeftBound,
  rightBound = defaultRightBound,
  children,
}: M.DatePickerProps) => {
  const [errors, setErrors] = useState<string[]>([]);

  //RETURN NULL FROM VALIDATORS IF VALIDATION PASSES
  useEffect(() => {
    //ON ERROR SET DEFAULT BOUNDS (?)
    setErrors([]);
    const boundsError = validateBounds(leftBound, rightBound);
    boundsError && setErrors([boundsError]);
  }, [leftBound, rightBound]);

  useEffect(() => {
    //ON ERROR SET TODAY && PUT VALIDATION IN CALLBACKS AND PREVENT SETDATE
    setErrors([]);
    const dateError = validateDate(date, leftBound, rightBound);
    dateError && setErrors([dateError]);
  }, [date]);

  const { day, month, year } = date;

  const previousYear = year - 1;
  const nextYear = year + 1;
  const nextMonth = month !== 11 ? month + 1 : 0;
  const previousMonth = month !== 0 ? month - 1 : 11;

  const setNextYear = () => {
    setDate({
      ...date,
      year: nextYear,
      dayOfWeek: getDayOfWeek(day, month, nextYear),
    });
  };

  const setPreviousYear = () => {
    setDate({
      ...date,
      year: previousYear,
      dayOfWeek: getDayOfWeek(day, month, previousYear),
    });
  };

  const setNextMonth = () => {
    if (month === 11)
      setDate({
        ...date,
        month: 0,
        year: nextYear,
        dayOfWeek: getDayOfWeek(day, 0, nextYear),
      });
    else
      setDate({
        ...date,
        month: nextMonth,
        dayOfWeek: getDayOfWeek(day, nextMonth, year),
      });
  };

  const setPreviousMonth = () => {
    if (month === 0)
      setDate({
        ...date,
        month: 11,
        year: previousYear,
        dayOfWeek: getDayOfWeek(day, 11, previousYear),
      });
    else
      setDate({
        ...date,
        month: previousMonth,
        dayOfWeek: getDayOfWeek(day, previousMonth, year),
      });
  };

  const setDay = (day: number) => {
    setDate({
      ...date,
      day,
      dayOfWeek: getDayOfWeek(day, month, year),
    });
  };

  const setNextMonthDay = (day: number) => {
    const newMonth = nextMonth;
    const newYear = nextMonth === 0 ? nextYear : year;

    setDate({
      day,
      month: newMonth,
      year: newYear,
      dayOfWeek: getDayOfWeek(day, newMonth, newYear),
    });
  };

  const setPreviousMonthDay = (day: number) => {
    const newMonth = previousMonth;
    const newYear = previousMonth === 11 ? previousYear : year;

    setDate({
      day,
      month: newMonth,
      year: newYear,
      dayOfWeek: getDayOfWeek(day, newMonth, newYear),
    });
  };

  const DAYS = isLeapYear(year)
    ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const previousMonthDays = Array.from(
    Array(getDayOfWeek(1, month, year)),
    (_, index) => DAYS[previousMonth] - getDayOfWeek(1, month, year) + index + 1
  );

  const currentMonthDays = Array.from(
    Array(DAYS[month]),
    (_, index) => index + 1
  );

  const nextMonthDays = Array.from(
    Array(6 - getDayOfWeek(DAYS[month], month, year)),
    (_, index) => index + 1
  );

  return (
    <>
      {cloneElement(children, {
        date,
        previousYear,
        nextYear,
        nextMonth,
        previousMonth,
        setNextYear,
        setPreviousYear,
        setNextMonth,
        setPreviousMonth,
        setDay,
        setNextMonthDay,
        setPreviousMonthDay,
        previousMonthDays,
        currentMonthDays,
        nextMonthDays,
        leftBound,
        rightBound,
      })}
    </>
  );
};
