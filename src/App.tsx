import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth, User, createUser } from './firebase';

import { SignIn, UserDashboard, SignUp, ProjectManagement } from './modules';

import UserContext from './providers/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
        {/* TODO protect routes */}
        <Route exact path="/dashboard/:userId" component={UserDashboard} />
        <Route
          exact
          path="/projects/:projectId"
          component={ProjectManagement}
        />
      </UserContext.Provider>
    </Switch>
  );
};

export default App;
