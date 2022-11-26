// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbyxP-xryuri8M9Ki5W7Zyvdh6U59kqGc",
  authDomain: "chat-2c3da.firebaseapp.com",
  projectId: "chat-2c3da",
  storageBucket: "chat-2c3da.appspot.com",
  messagingSenderId: "174832068764",
  appId: "1:174832068764:web:ef82f45d1bea776be1e559",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
