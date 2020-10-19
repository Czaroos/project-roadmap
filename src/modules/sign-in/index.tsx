import React from 'react';

import { Input, signInWithGoogle, GoogleButton } from '../..';

import './style.scss';

export const SignIn = () => {
  return (
    <div className="signIn">
      <div className="inputs">
        <h4>E-MAIL:</h4>
        <Input type="email" />
        <h4>PASSWORD:</h4>
        <Input type="password" />
      </div>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
};
