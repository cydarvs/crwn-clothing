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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);
    // if email is not exists in the firebase database
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  // firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;