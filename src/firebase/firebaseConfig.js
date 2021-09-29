import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBjOIHu8pAupaYAJq6bBCEj2jBehSMfJ8A",
    authDomain: "journal-app-7298e.firebaseapp.com",
    projectId: "journal-app-7298e",
    storageBucket: "journal-app-7298e.appspot.com",
    messagingSenderId: "270984269275",
    appId: "1:270984269275:web:68b4ae826a4243e2ffebfe",
    measurementId: "G-G9TY906VML"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }