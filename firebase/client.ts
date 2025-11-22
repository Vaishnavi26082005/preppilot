
import { initializeApp,getApps ,getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwC-s0HXvw8kBP_f100KbQ4LE0j1CHBc4",
  authDomain: "preppilot-18a29.firebaseapp.com",
  projectId: "preppilot-18a29",
  storageBucket: "preppilot-18a29.firebasestorage.app",
  messagingSenderId: "676811636330",
  appId: "1:676811636330:web:a8807b78851a11eddc5413",
  measurementId: "G-W03QMSB35H"
};

// Initialize Firebase
const app = !getApps.length?  initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);