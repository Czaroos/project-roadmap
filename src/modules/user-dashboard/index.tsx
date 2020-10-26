import React, { useContext } from 'react';

import { Header, Footer, Project } from '../../components';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const UserDashboard = () => {
  const currentUser = useContext(UserContext);

  return (
    <div className="userDashboard">
      <Header />
      <div className="projects">
        {currentUser &&
          currentUser.projects.map((project) => {
            <div>{project}</div>;
          })}
        <Project />
        <Project />
        <Project />
      </div>
      <Footer />
    </div>
  );
};
