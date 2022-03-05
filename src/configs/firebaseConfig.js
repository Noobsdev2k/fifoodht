import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt0F_woxXT66djdVTNRH6jhbO2ujPRYDY",
  authDomain: "food-app-e67cd.firebaseapp.com",
  databaseURL: "https://food-app-e67cd-default-rtdb.firebaseio.com",
  projectId: "food-app-e67cd",
  storageBucket: "food-app-e67cd.appspot.com",
  messagingSenderId: "981183725499",
  appId: "1:981183725499:web:dbfe47018374d7a210ce9e",
  measurementId: "G-LGB39ZJRMK"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

auth.setPersistence("local");

export default firebase;
export { googleProvider, facebookProvider, auth, db };
