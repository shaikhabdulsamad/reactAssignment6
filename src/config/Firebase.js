
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD33elR0jEd0SXxyHZ9XZZ5MoUcFho0Q2c",
  authDomain: "social-app-3d9eb.firebaseapp.com",
  databaseURL: "https://social-app-3d9eb.firebaseio.com",
  projectId: "social-app-3d9eb",
  storageBucket: "social-app-3d9eb.appspot.com",
  messagingSenderId: "569993206708",
  appId: "1:569993206708:web:ed18bedcd17ced0ff2b0e1",
  measurementId: "G-G6SBKQKG0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut}