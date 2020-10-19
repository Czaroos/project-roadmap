import React from 'react';

import { GitHubIcon } from '../../assets';

import './style.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/Czaroos">
        <GitHubIcon />
      </a>
    </div>
  );
};
