import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, createProject } from '../../firebase';

import { Button, Avatar, Modal } from '..';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const currentUser = useContext(UserContext);

  const history = useHistory();

  return (
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className={`header ${currentUser ? 'userLogged' : ''}`}>
        {currentUser ? (
          <>
            <Button
              variant="round"
              // onClick={() => createProject('test', currentUser.id)}
              onClick={() => setModalOpen(true)}
            >
              +
            </Button>
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
    </>
  );
};
