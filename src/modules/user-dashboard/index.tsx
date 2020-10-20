import React, { useContext } from 'react';

import { Header, Footer } from '../../components';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const UserDashboard = () => {
  const { projects } = useContext(UserContext)!;

  return (
    <div className="userDashboard">
      <Header />
      <div className="projects">
        {projects.map((project) => {
          <div>{project}</div>;
        })}
      </div>
      <Footer />
    </div>
  );
};
