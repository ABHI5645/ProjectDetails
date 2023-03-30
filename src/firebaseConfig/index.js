// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpicdYXyNh6xun8sFhnEsF8yHNJai60Gs",
  authDomain: "projectsdashboard-955fc.firebaseapp.com",
  projectId: "projectsdashboard-955fc",
  storageBucket: "projectsdashboard-955fc.appspot.com",
  messagingSenderId: "109272489857",
  appId: "1:109272489857:web:30131dde7eaacfd8cb1280",
  measurementId: "G-368ZVH3B19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db=getFirestore(app);