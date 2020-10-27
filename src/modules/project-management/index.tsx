import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Footer, ProjectDetails } from '../../components';

import { getProjectsByIds, Project } from '../../firebase';

import './style.scss';

export const ProjectManagement = () => {
  const [currentProject, setCurrentProject] = useState<Project>();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const project = await getProjectsByIds(Object.values(params));
      setCurrentProject(project[0]);
    })();
  }, []);

  return (
    <div className="projectManagement">
      <Header projectName={currentProject && currentProject.name} />
      <div className="management">
        <ProjectDetails />
      </div>
      <Footer />
    </div>
  );
};
