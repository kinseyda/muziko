// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC05aOgWVyYgixBCR1QeC8qR_oY_qv_eo0",
  authDomain: "muziko-3176b.firebaseapp.com",
  projectId: "muziko-3176b",
  storageBucket: "muziko-3176b.appspot.com",
  messagingSenderId: "355720337461",
  appId: "1:355720337461:web:2c3a0aefd1e2428d40f97c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
