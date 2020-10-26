import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

import { Button, Avatar } from '..';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const Header = () => {
  const currentUser = useContext(UserContext);
  const history = useHistory();

  return (
    <div className={`header ${currentUser ? 'userLogged' : ''}`}>
      {currentUser ? (
        <>
          <Button variant="round">+</Button>
          <h2>YOUR PROJECTS</h2>
          <div className="userActions">
            <Avatar displayName={currentUser.displayName} />
            <Button
              onClick={() => {
                auth.signOut();
                history.push('/');
              }}
            >
              LOG OUT
            </Button>
          </div>
        </>
      ) : (
        <>
          <Button onClick={() => history.push('/')}>LOG IN</Button>
          <Button onClick={() => history.push('/register')}>REGISTER</Button>
        </>
      )}
    </div>
  );
};
