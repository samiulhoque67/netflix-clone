
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBP7hIzKPg9jtRbKeumRa-2WAVBrdaXpxk",
    authDomain: "netflix-clone-c6827.firebaseapp.com",
    databaseURL: "https://netflix-clone-c6827.firebaseio.com",
    projectId: "netflix-clone-c6827",
    storageBucket: "netflix-clone-c6827.appspot.com",
    messagingSenderId: "965663895828",
    appId: "1:965663895828:web:461d77b0dbd1c3dac91201",
    measurementId: "G-LYSW6EDS6K"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };