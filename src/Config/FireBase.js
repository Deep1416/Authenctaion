// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5zKO4sALK77761W_2N0bX1WlC0hgEUjU",
  authDomain: "geekster-2ba35.firebaseapp.com",
  projectId: "geekster-2ba35",
  storageBucket: "geekster-2ba35.appspot.com",
  messagingSenderId: "92148807569",
  appId: "1:92148807569:web:6aa86a71258ebe4a69cc30",
  measurementId: "G-N0Z6980DR6"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
