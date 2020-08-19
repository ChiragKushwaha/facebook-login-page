import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAIlOYoBFWpBPPCXd6FupwKT8PPUNd7Rwc',
  authDomain: 'facebook-login-mobile.firebaseapp.com',
  databaseURL: 'https://facebook-login-mobile.firebaseio.com',
  projectId: 'facebook-login-mobile',
  storageBucket: 'facebook-login-mobile.appspot.com',
  messagingSenderId: '308552516424',
  appId: '1:308552516424:web:11e676069a9371d34ee97d',
  measurementId: 'G-VZB6J2YW7P',
});

const db = firebaseApp.firestore();

export default db;
