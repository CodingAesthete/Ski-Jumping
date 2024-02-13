// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ski-jumping-25143.firebaseapp.com",
  projectId: "ski-jumping-25143",
  storageBucket: "ski-jumping-25143.appspot.com",
  messagingSenderId: "762602513859",
  appId: "1:762602513859:web:1992a727ca8687beb3c976"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);