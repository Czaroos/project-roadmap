import { firestore } from '../config';

export const createProject = async (name: string, userId: string) => {
  const project = await firestore
    .collection('projects')
    .where('name', '==', name)
    .get();

  //TODO: change it later to users only projects
  if (!project.empty) {
    alert('Project with this name already exists.');
    return;
  }

  const createdAt = new Date();
  const events: string[] = [];
  const users: string[] = [userId];

  const newProject = {
    name,
    createdAt,
    users,
    events,
  };

  const userRef = firestore.doc(`users/${userId}`);
  const user = await userRef.get();

  try {
    const { projects } = user.data();
    const projectRef = await firestore.collection('projects').add(newProject);
    await userRef.set({
      ...user.data(),
      projects: [...projects, projectRef.id],
    });
  } catch (err) {
    //TODO: Handle error
    console.log(err.message);
  }

  return newProject;
};
