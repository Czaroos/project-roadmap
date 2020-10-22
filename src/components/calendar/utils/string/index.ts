import { Language } from '../..';

export const dayOfWeekToString = (language: Language, dayOfWeek: number) => {
  return language.DAYS_OF_WEEK[dayOfWeek];
};

export const monthToString = (language: Language, month: number) => {
  return language.MONTHS[month];
};
