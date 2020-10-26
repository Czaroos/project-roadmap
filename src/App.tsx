import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { auth, User, createUser } from './firebase';

import { SignIn, UserDashboard, SignUp } from './modules';

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
    <Switch>
      <UserContext.Provider value={currentUser}>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        {/* TODO protect route */}
        <Route exact path="/dashboard/:userId" component={UserDashboard} />
      </UserContext.Provider>
    </Switch>
  );
};

export default App;
