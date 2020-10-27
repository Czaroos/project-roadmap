import React, { useState } from 'react';

import { ProjectManager } from '../calendar';

import { DatePicker, Date, getToday } from '../../utils';

export const ProjectDetails = () => {
  const [date, setDate] = useState<Date>(getToday());

  return (
    <div>
      <DatePicker date={date} setDate={setDate}>
        <ProjectManager />
      </DatePicker>
    </div>
  );
};
