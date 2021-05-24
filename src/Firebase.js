import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3OiZnNvqQHbsTXj41fdOxMS-qyDsudyc",
  authDomain: "satori-9f3eb.firebaseapp.com",
  projectId: "satori-9f3eb",
  storageBucket: "satori-9f3eb.appspot.com",
  messagingSenderId: "500724702169",
  appId: "1:500724702169:web:ccd0423f77bab94cc657c8",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();