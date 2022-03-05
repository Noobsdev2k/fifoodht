import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrL8c63Ab5Id73IeKCLyNL6sQSmdnSOQE",
  authDomain: "food-f-base.firebaseapp.com",
  projectId: "food-f-base",
  storageBucket: "food-f-base.appspot.com",
  messagingSenderId: "283069086641",
  appId: "1:283069086641:web:68561d4704164c3a35db90",
  measurementId: "G-MZC8S5ZF06"
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
