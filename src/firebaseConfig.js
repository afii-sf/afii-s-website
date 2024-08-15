// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYOeVt1-gbk65eYoEjCUjG0cskyMFPkKM",
  authDomain: "afii-9a08c.firebaseapp.com",
  projectId: "afii-9a08c",
  storageBucket: "afii-9a08c.appspot.com",
  messagingSenderId: "366044121638",
  appId: "1:366044121638:web:af8a4d0946395c8f8534e7",
  measurementId: "G-TETTQ0KWBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;