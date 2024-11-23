// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7iwQn2aV2641s8nTwAPEvxP97w4jcWsw",
  authDomain: "assignment-11-b365c.firebaseapp.com",
  projectId: "assignment-11-b365c",
  storageBucket: "assignment-11-b365c.firebasestorage.app",
  messagingSenderId: "806548551881",
  appId: "1:806548551881:web:b37dcf421cf100f7fe7518",
  measurementId: "G-ZH2HWNSQ2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;