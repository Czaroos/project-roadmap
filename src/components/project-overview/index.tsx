import React, { useState } from 'react';

import { ProjectThumbnail } from '../calendar';

import { DatePicker, Date, getToday } from '../../utils';

import { ProjectOverviewProps } from './model';

import './style.scss';

export const ProjectOverview = ({ name }: ProjectOverviewProps) => {
  const [date, setDate] = useState<Date>(getToday());

  return (
    <div className="projectOverview">
      <h2>{name}</h2>
      <DatePicker date={date} setDate={setDate}>
        <ProjectThumbnail />
      </DatePicker>
    </div>
  );
};
