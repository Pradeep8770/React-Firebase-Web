import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyAYrUjaIvOO9DxCNRupxHoxUGjsos0Q-gY",
    authDomain: "react-firebase-web-d33be.firebaseapp.com",
    databaseURL: "https://react-firebase-web-d33be-default-rtdb.firebaseio.com",
    projectId: "react-firebase-web-d33be",
    storageBucket: "react-firebase-web-d33be.appspot.com",
    messagingSenderId: "320622996027",
    appId: "1:320622996027:web:8da4d9426653d33b1fca1e"
  };

  firebase.initializeApp(firebaseConfig);
  export const dataref = firebase.database();
  export default firebase;
