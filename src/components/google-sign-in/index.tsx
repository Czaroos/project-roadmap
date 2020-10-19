import React from 'react';

import { GoogleIcon } from './icon';

import './style.scss';

export const GoogleButton = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div className="googleButton" {...props}>
      <GoogleIcon />
    </div>
  );
};
