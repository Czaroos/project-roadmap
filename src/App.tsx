import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { auth, User, createUser } from './firebase';

import { SignIn, UserDashboard } from './modules';

import UserContext from './providers/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUser(user);

        userRef?.onSnapshot((snapshot) => {
          const { email, displayName, createdAt, projects } = snapshot.data()!;

          setCurrentUser({
            id: snapshot.id,
            email,
            displayName,
            createdAt,
            projects,
          });

          history.push(`/dashboard/${snapshot.id}`);
        });
      } else setCurrentUser(null);
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        {/* TODO protect route */}
        <Route exact path="/dashboard/:userId" component={UserDashboard} />
      </Switch>
    </UserContext.Provider>
  );
};

export default App;
