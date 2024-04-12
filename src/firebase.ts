// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWmXfbiXoWjhJW19OaykDoa4QpUiKS-eE",
  authDomain: "mt-health-4e1e5.firebaseapp.com",
  databaseURL: "https://mt-health-4e1e5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mt-health-4e1e5",
  storageBucket: "mt-health-4e1e5.appspot.com",
  messagingSenderId: "72732959396",
  appId: "1:72732959396:web:fc80c4d49481990a6c3c31",
  measurementId: "G-9DBQPGG719"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);