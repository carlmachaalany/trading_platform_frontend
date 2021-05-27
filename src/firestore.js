import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAYKkWOnMUutfWeDkaE-9YgNoJyXORW2Yc",
    authDomain: "svelteusers-397cb.firebaseapp.com",
    databaseURL: "https://svelteusers-397cb-default-rtdb.firebaseio.com",
    projectId: "svelteusers-397cb",
    storageBucket: "svelteusers-397cb.appspot.com",
    messagingSenderId: "492105078358",
    appId: "1:492105078358:web:94f4e19386509dd7524df7",
    measurementId: "G-QHVRX7H6B9"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references;
export const auth = firebase.auth();
export const db = firebase.firestore();


