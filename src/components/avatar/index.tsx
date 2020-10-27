import React from 'react';

import { AvatarProps } from './model';

import './style.scss';

export const Avatar = ({ displayName, ...rest }: AvatarProps) => {
  const splitName = displayName.split(' ');

  return (
    <div className="avatar" {...rest}>
      {splitName.map((splitStr, idx) => idx <= 1 && splitStr.charAt(0))}
    </div>
  );
};
