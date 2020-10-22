import * as M from '../../model';

export const getToday = (): M.Date => {
  const today = new Date();

  return {
    day: today.getDate(),
    month: today.getMonth(),
    year: today.getFullYear(),
    dayOfWeek: today.getDay(),
  };
};

export const parseInitDate = (initDate: M.InitDate): M.Date => {
  const { day, month, year } = initDate;

  return {
    year,
    month: month ? month : 0,
    day: day ? day : 1,
    dayOfWeek: new Date(year, month, day).getDay(),
  };
};

export const isLeapYear = (year: number) => {
  return new Date(year, 1, 29).getDate() === 29;
};

export const getDayOfWeek = (day: number, month: number, year: number) => {
  return new Date(year, month, day).getDay();
};
