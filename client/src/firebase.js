/**
 * Your web app's Firebase configuration.
 * We use import.meta.env in stead of process.
 * Do not forget to enable the google auth provider from firebase before you can use the auth.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blob.firebaseapp.com",
  projectId: "mern-blob",
  storageBucket: "mern-blob.appspot.com",
  messagingSenderId: "999445023645",
  appId: "1:999445023645:web:1b95b2eb86141f23a83d74",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
