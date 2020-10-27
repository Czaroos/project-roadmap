import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { auth } from '../../firebase';

import { Button, Avatar, Modal } from '..';

import UserContext from '../../providers/UserContext';

import { HeaderProps } from './model';

import './style.scss';

export const Header = ({ projectName }: HeaderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const currentUser = useContext(UserContext);

  const history = useHistory();

  return (
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
      <div className={`header ${currentUser ? 'userLogged' : ''}`}>
        {currentUser ? (
          <>
            <Button variant="round" onClick={() => setModalOpen(true)}>
              +
            </Button>
            <h2>{`${projectName ? projectName : 'YOUR PROJECTS'}`}</h2>
            <div className="userActions">
              <Avatar
                displayName={currentUser.displayName}
                onClick={() => history.push(`/dashboard/${currentUser.id}`)}
              />
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
