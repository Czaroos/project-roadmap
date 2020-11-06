import React, { cloneElement } from "react";

import { CalendarProps } from "..";

import { monthToString } from "../utils/string";

import { EN } from "../languages";

import { NextMonthArrow, PreviousMonthArrow, YearButton } from "../components";

import "./style.scss";

export const ProjectManager = (props: CalendarProps) => {
  const {
    date,
    previousYear,
    nextYear,
    nextMonth,
    previousMonth,
    setNextYear,
    setPreviousYear,
    setNextMonth,
    setPreviousMonth,
    previousMonthDays,
    currentMonthDays,
    nextMonthDays,
    language = EN,
    previousMonthArrow = <PreviousMonthArrow className="previousBig" />,
    nextMonthArrow = <NextMonthArrow className="nextBig" />,
    previousYearButton = <YearButton className="yearBig" />,
    nextYearButton = <YearButton className="yearBig" />,
  } = props;

  const { month, year } = date;

  return (
    <div className={`projectManager`}>
      <div className={`calendarHeader`}>
        {cloneElement(previousYearButton, {
          onClick: setPreviousYear,
          dateFragment: previousYear,
        })}
        <h2>{`${monthToString(language, month)}, ${year}`}</h2>
        {cloneElement(nextYearButton, {
          onClick: setNextYear,
          dateFragment: nextYear,
        })}
      </div>
      <div className={`days`}>
        {language.DAYS_OF_WEEK.map((dayOfWeek) => (
          <h2 key={dayOfWeek} className="dayOfWeek">
            {dayOfWeek.slice(0, 3)}
          </h2>
        ))}

        {previousMonthDays.map((day) => (
          <div key={day} className={`day otherMonthDay`}>
            <h3>{day}</h3>
          </div>
        ))}

        {currentMonthDays.map((day) => (
          <div key={day} className="day">
            <h3>{day}</h3>
          </div>
        ))}

        {nextMonthDays.map((day) => (
          <div key={day} className={`day otherMonthDay`}>
            <h3>{day}</h3>
          </div>
        ))}
      </div>
      <div className={`monthArrows`}>
        {cloneElement(previousMonthArrow, {
          onClick: setPreviousMonth,
          dateFragment: previousMonth,
        })}
        {cloneElement(nextMonthArrow, {
          onClick: setNextMonth,
          dateFragment: nextMonth,
        })}
      </div>
    </div>
  );
};
