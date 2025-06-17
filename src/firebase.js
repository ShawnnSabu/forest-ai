// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArfWbHt6k-acPIl9-q2pCAZB1AGo-xBBc",
  authDomain: "forestai-6cf71.firebaseapp.com",
  projectId: "forestai-6cf71",
  storageBucket: "forestai-6cf71.firebasestorage.app",
  messagingSenderId: "539798510831",
  appId: "1:539798510831:web:41b8e6af0164369a5ccf1a",
  measurementId: "G-ZQ28GNETRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);