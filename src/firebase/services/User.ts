import { firestore } from '../config';

export const createUser = async (
  user: firebase.User | null,
  ...rest: object[]
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    const projects: string[] = [];

    const newUser = Object.assign(
      {},
      {
        displayName,
        email,
        createdAt,
        projects,
      },
      ...rest
    );

    try {
      await userRef.set(newUser);
    } catch (err) {
      //handle error
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};
