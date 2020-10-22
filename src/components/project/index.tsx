import React, { useState } from 'react';

import { ProjectThumbnail } from '../calendar';

import { DatePicker, Date, getToday } from '../../utils';

export const Project = () => {
  const [date, setDate] = useState<Date>(getToday());

  return (
    <div>
      <h2>PROJECT NAME</h2>
      <DatePicker date={date} setDate={setDate}>
        <ProjectThumbnail />
      </DatePicker>
    </div>
  );
};
