import React from 'react';
import { Button } from '../../..';

export const YearButton = (props: Button) => {
  const { dateFragment, onClick, className, children } = props;

  return (
    <div className={`yearButton ${className}`} onClick={onClick}>
      <h4>{dateFragment}</h4>
      {children}
    </div>
  );
};
