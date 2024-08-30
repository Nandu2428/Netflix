// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcqcV2jWPZb6eIwEMbBGj7kfFP7r4_tjs",
  authDomain: "netflixgpt-42de3.firebaseapp.com",
  projectId: "netflixgpt-42de3",
  storageBucket: "netflixgpt-42de3.appspot.com",
  messagingSenderId: "656796206471",
  appId: "1:656796206471:web:c74b8457844e23b3d53f22",
  measurementId: "G-MT0V281DZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();