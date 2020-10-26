import React from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Header, Footer } from '../../components';

import { GoogleIcon } from '../../assets';

import { signInWithGoogle } from '../../firebase';

import './style.scss';

export const SignIn = () => {
  const history = useHistory();

  return (
    <div className="signIn">
      <Header />
      <div className="inputs">
        <h4>E-MAIL:</h4>
        <Input type="email" />
        <h4>PASSWORD:</h4>
        <Input type="password" />
        <h4>Forgot password?</h4>
        <Button>SUBMIT</Button>
      </div>
      <div className="noAccount">
        <h3>Don't have an account yet?</h3>
        <Button onClick={() => history.push('/register')}>SIGN UP</Button>
        <h3>
          Or... log in with your <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span> account!
        </h3>
        <Button variant="round" onClick={signInWithGoogle}>
          <GoogleIcon />
        </Button>
      </div>
      <Footer />
    </div>
  );
};
