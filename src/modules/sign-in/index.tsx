import React, { useState, useEffect } from 'react';

import { Input, signInWithGoogle, Button, auth, Header, Footer } from '../..';

import { GoogleIcon } from '../../assets';

import './style.scss';

export const SignIn = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      setCurrentUser(user)
    );
    return () => unsubscribeFromAuth();
  });

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
