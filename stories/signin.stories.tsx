import React from 'react';
import { storiesOf } from '@storybook/react';
import { SignIn } from '../src';
import './style.scss';

storiesOf('Sign in module', module).add('primary view', function () {
  return (
    <div className={`centeredContainer`}>
      <SignIn />
    </div>
  );
});
