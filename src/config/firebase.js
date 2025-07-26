import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpWDea0UC_-6NsIhk5qXkq31GecWQNcMY",
  authDomain: "cc-project-f598d.firebaseapp.com",
  projectId: "cc-project-f598d",
  storageBucket: "cc-project-f598d.appspot.com",
  messagingSenderId: "385900654193",
  appId: "1:385900654193:web:1ea9b8e9bb230610c575d0",
  measurementId: "G-W63GQ7M1ES"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
