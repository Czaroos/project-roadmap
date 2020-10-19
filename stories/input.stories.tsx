import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../src';
import './style.scss';

storiesOf('Input', module).add('primary view', function () {
  return (
    <div className={`centeredContainer`}>
      <Input />
    </div>
  );
});
