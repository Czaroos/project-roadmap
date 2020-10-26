import React, { useState, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Header, Footer } from '../../components';

import { GoogleIcon } from '../../assets';

import { auth, signInWithGoogle } from '../../firebase';

import './style.scss';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();

    //TODO: complete validation
    if (email == '' || password == '') {
      alert('All fields must be filled in.');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);
      clearForm();
    } catch (err) {
      //TODO: Handle error
      console.log(err.message);
    }
  };

  return (
    <div className="signIn">
      <Header />
      <div className="inputs">
        <h4>E-MAIL:</h4>
        <Input type="email" onChange={(e) => setEmail(e.target.value)} />
        <h4>PASSWORD:</h4>
        <Input type="password" onChange={(e) => setPassword(e.target.value)} />
        <h4>Forgot password?</h4>
        <Button onClick={handleSubmit}>SUBMIT</Button>
      </div>
      <div className="noAccount">
        <h3>Don't have an account yet?</h3>
        <Button onClick={() => history.push('/register')}>SIGN UP</Button>
        <h3>
          Or... sign in with your <span>G</span>
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
