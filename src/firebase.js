// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSWKdXdNEqwh-0x8AxyChv1uC0Wu6mEIA",
  authDomain: "authentication-73323.firebaseapp.com",
  projectId: "authentication-73323",
  storageBucket: "authentication-73323.appspot.com",
  messagingSenderId: "794104380483",
  appId: "1:794104380483:web:ca690cf8e35d7b1a6268f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);