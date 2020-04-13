import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyACRMVVIAsOoZgxG6bQi2Q8GNQwpMWqpNI',
    authDomain: 'crown-db-7e23e.firebaseapp.com',
    databaseURL: 'https://crown-db-7e23e.firebaseio.com',
    projectId: 'crown-db-7e23e',
    storageBucket: 'crown-db-7e23e.appspot.com',
    messagingSenderId: '1098254756724',
    appId: '1:1098254756724:web:9c8caca381b519fa751a21',
    // measurementId: 'G-RFYHGZZEXY'
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;