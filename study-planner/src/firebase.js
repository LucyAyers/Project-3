import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM1UdsONuZ5P_LDMPN9StMTIdKtyUXK6U",
  authDomain: "final-project-96d73.firebaseapp.com",
  projectId: "final-project-96d73",
  storageBucket: "final-project-96d73.firebasestorage.app",
  messagingSenderId: "579757408164",
  appId: "1:579757408164:web:b1ac4a4f003a6bbbab4b31",
  measurementId: "G-WFQMYPLPR1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
