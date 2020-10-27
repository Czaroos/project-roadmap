import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ProjectThumbnail } from '../calendar';

import { DatePicker, Date, getToday } from '../../utils';

import { ProjectOverviewProps } from './model';

import './style.scss';

export const ProjectOverview = ({ name, id }: ProjectOverviewProps) => {
  const [date, setDate] = useState<Date>(getToday());

  const history = useHistory();

  return (
    <div className="projectOverview">
      <h2 onClick={() => history.push(`/projects/${id}`)}>{name}</h2>
      <DatePicker date={date} setDate={setDate}>
        <ProjectThumbnail />
      </DatePicker>
    </div>
  );
};
