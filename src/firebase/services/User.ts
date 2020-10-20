import { firestore } from '../config';

export const createUser = async (user: firebase.User | null, rest?: any[]) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    const projects: string[] = [];

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        projects,
        ...rest,
      });
    } catch (err) {
      //handle error
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};
