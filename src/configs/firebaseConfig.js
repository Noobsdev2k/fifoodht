import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4tLAQAnuak7UYBq0IDnpt9ZobPrWAuyg",
  authDomain: "food-f-base-a9142.firebaseapp.com",
  projectId: "food-f-base-a9142",
  storageBucket: "food-f-base-a9142.appspot.com",
  messagingSenderId: "601998816204",
  appId: "1:601998816204:web:fbbedf9e7f94d6837b2369",
  measurementId: "G-G7CFBT3YGR",
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
