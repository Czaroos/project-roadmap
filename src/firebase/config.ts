import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBZQ61LBBf722o8KS2KB4OLqqJ_Bv-lPXg',
  authDomain: 'billennium-roadmap.firebaseapp.com',
  databaseURL: 'https://billennium-roadmap.firebaseio.com',
  projectId: 'billennium-roadmap',
  storageBucket: 'billennium-roadmap.appspot.com',
  messagingSenderId: '783544819284',
  appId: '1:783544819284:web:0b4bcd6a0e2b36b7b257c1',
  measurementId: 'G-4EY09QL0RT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
