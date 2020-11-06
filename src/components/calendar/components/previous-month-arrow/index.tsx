import React from 'react';
import { Button } from '../..';
import { PreviousMonthArrowIcon } from './icon/PreviousMonthArrowIcon';
import './style.scss';

export const PreviousMonthArrow = (props: Button) => {
  const { onClick, className, children } = props;

  return (
    <div className={`previousMonthArrow ${className ? className : ''}`} onClick={onClick}>
      <PreviousMonthArrowIcon />
      {children}
    </div>
  );
};
