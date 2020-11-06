import React from 'react';
import { Button } from '../..';
import { NextMonthArrowIcon } from './icon/NextMonthArrowIcon';
import './style.scss';

export const NextMonthArrow = (props: Button) => {
  const { onClick, className, children } = props;

  return (
    <div className={`nextMonthArrow ${className ? className : ''}`} onClick={onClick}>
      <NextMonthArrowIcon />
      {children}
    </div>
  );
};
