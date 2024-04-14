// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKn_1sOiDttYe3yrTomIgk9E3dUaqeXuA",
  authDomain: "mt4health-fc319.firebaseapp.com",
  projectId: "mt4health-fc319",
  storageBucket: "mt4health-fc319.appspot.com",
  messagingSenderId: "807117223745",
  appId: "1:807117223745:web:b6d7c3a338092d678c53c0",
  measurementId: "G-HX2TVJQ8KS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);