import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

// Firebase configuration used to setup firebase app
const firebaseConfig = {
  apiKey: "AIzaSyCdhdVYsMBjF2ZQYK9i97v4xZCqBRhDob4",
  authDomain: "slidecreator-748a5.firebaseapp.com",
  databaseURL: "https://slidecreator-748a5.firebaseio.com",
  projectId: "slidecreator-748a5",
  storageBucket: "slidecreator-748a5.appspot.com",
  messagingSenderId: "500523622209",
  appId: "1:500523622209:web:f19e14cb84530e4904cbc0",
  measurementId: "G-C4JDKZ8Z1B",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
