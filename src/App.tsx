import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth, User, createUser } from './firebase';

import { SignIn } from './modules';

import UserContext from './providers/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    document.body.style.cursor = 'progress';
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
      document.body.style.cursor = 'default';
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/dashboard/:userId" component={SignIn} />
      </Switch>
    </UserContext.Provider>
  );
};

export default App;
