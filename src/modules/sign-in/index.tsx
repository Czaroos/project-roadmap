import React, { useState, useEffect } from 'react';

import { Input, Button, Header, Footer } from '../../components';

import { GoogleIcon } from '../../assets';

import { signInWithGoogle, auth, User, createUser } from '../../firebase';

import './style.scss';

export const SignIn = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUser(user);

        userRef?.onSnapshot((snapshot) => {
          const { email, displayName, createdAt } = snapshot.data()!;

          setCurrentUser({
            id: snapshot.id,
            email,
            displayName,
            createdAt,
          });
        });
      } else setCurrentUser(null);
    });
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
