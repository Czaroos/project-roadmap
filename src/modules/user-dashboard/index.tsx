import React, { useEffect, useState, useContext } from 'react';

import { Header, Footer, ProjectOverview } from '../../components';

import { Project, getProjectsByIds } from '../../firebase';

import UserContext from '../../providers/UserContext';

import './style.scss';

export const UserDashboard = () => {
  const [projects, setProjects] = useState<Project[]>();

  const currentUser = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        const projects = await getProjectsByIds(currentUser.projects);
        setProjects(projects);
      } catch (err) {
        //TODO: handle error
        console.log(err.message);
      }
    })();
  }, [currentUser]);

  return (
    <div className="userDashboard">
      <Header />
      <div className="projects">
        {projects &&
          projects.map((project) => {
            return (
              <ProjectOverview
                name={project.name}
                key={project.id}
                id={project.id}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};
