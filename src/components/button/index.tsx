import React from 'react';

import { ButtonProps } from './model';

import './style.scss';

export const Button = ({
  variant = 'default',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <div className={`button ${variant}`} {...rest}>
      {children}
    </div>
  );
};
