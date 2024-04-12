// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGzbRTebHk0JPJZfKrakW1tIffEu9I7DY",
  authDomain: "netflixgpt-a4ee4.firebaseapp.com",
  projectId: "netflixgpt-a4ee4",
  storageBucket: "netflixgpt-a4ee4.appspot.com",
  messagingSenderId: "955920762334",
  appId: "1:955920762334:web:3994e9220fa1c8e491894f",
  measurementId: "G-SGGPEFD1WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();