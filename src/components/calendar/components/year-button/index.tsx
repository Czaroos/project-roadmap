import React from 'react';
import { Button } from '../..';

import './style.scss';

export const YearButton = (props: Button) => {
  const { dateFragment, onClick, className, children } = props;

  return (
    <div className={`yearButton ${className ? className : ''}`} onClick={onClick}>
      <h4>{dateFragment}</h4>
      {children}
    </div>
  );
};
