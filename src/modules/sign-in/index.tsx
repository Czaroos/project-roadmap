import React from 'react';

import { Input, Button, Header, Footer } from '../../components';

import { GoogleIcon } from '../../assets';

import { signInWithGoogle } from '../../firebase';

import './style.scss';

export const SignIn = () => {
  return (
    <div className="signIn">
      <Header />
      <div className="inputs">
        <h4>E-MAIL:</h4>
        <Input type="email" />
        <h4>PASSWORD:</h4>
        <Input type="password" />
      </div>
      <Button variant="round" onClick={signInWithGoogle}>
        <GoogleIcon />
      </Button>
      <Footer />
    </div>
  );
};
