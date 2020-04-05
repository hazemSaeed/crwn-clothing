import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDM70Ed3WRgPKLg5Y3evHmTPiIXwniE4uU',
  authDomain: 'crwn-96b5b.firebaseapp.com',
  databaseURL: 'https://crwn-96b5b.firebaseio.com',
  projectId: 'crwn-96b5b',
  storageBucket: 'crwn-96b5b.appspot.com',
  messagingSenderId: '586210044626',
  appId: '1:586210044626:web:0d1b6730005914c1029b0b',
  measurementId: 'G-KDKFGL1VWM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
