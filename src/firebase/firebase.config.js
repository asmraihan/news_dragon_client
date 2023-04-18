// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD9tcsj8smDDFsaz7S8fx4z5Nt_Ti_pbc",
  authDomain: "news-dragon-4d95e.firebaseapp.com",
  projectId: "news-dragon-4d95e",
  storageBucket: "news-dragon-4d95e.appspot.com",
  messagingSenderId: "615570713378",
  appId: "1:615570713378:web:3c0df8216550123e95937b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app