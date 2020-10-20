import React, { useContext } from 'react';

import { Input, Button, Header, Footer } from '../../components';

import { GoogleIcon } from '../../assets';

import { signInWithGoogle } from '../../firebase';

import './style.scss';
import { RouteComponentProps } from 'react-router-dom';

import UserContext from '../../providers/UserContext';

export const SignIn = (props: RouteComponentProps) => {
  const currentUser = useContext(UserContext);

  return (
    <div className="signIn">
      <Header currentUser={currentUser} />
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
