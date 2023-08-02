import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA9zOi88Smyad0gBKXjyN6-anOyKkSUitc",
  authDomain: "linkedin-clone-326ef.firebaseapp.com",
  projectId: "linkedin-clone-326ef",
  storageBucket: "linkedin-clone-326ef.appspot.com",
  messagingSenderId: "388614364170",
  appId: "1:388614364170:web:1fddd45bf3c840cffe53f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);