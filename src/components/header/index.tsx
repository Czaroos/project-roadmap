import React from 'react';

import { auth } from '../..';

import { HeaderProps } from './model';

import { Button } from '../button';

import './style.scss';

export const Header = ({ currentUser }: HeaderProps) => {
  return (
    <div className="header">
      {currentUser ? (
        <Button onClick={() => auth.signOut()}>LOG OUT</Button>
      ) : (
        <>
          <Button>LOG IN</Button>
          <Button>REGISTER</Button>
        </>
      )}
    </div>
  );
};
