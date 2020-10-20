import React from 'react';

import { AvatarProps } from './model';

import './style.scss';

export const Avatar = ({ displayName }: AvatarProps) => {
  const splitName = displayName.split(' ');

  return (
    <div className="avatar">{`${splitName[0].charAt(0)}${splitName[1].charAt(
      0
    )}`}</div>
  );
};
