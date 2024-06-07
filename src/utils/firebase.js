// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {FIREBASE_KEY } from './constants';
import {AUTH_DOMAIN } from './constants';
import {MESSAGING_SENDER_ID} from './constants';
import {APPS_ID} from './constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: "netflixgpt-a4ee4",
  storageBucket: "netflixgpt-a4ee4.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: "1:955920762334:web:3994e9220fa1c8e491894f",
  measurementId: "G-SGGPEFD1WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();