import React from 'react';

import './style.scss';

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return <input className="input" {...props} />;
};
