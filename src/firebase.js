// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiBC8a1hKDKteqArUUYBCIFL2sTDz2s2U",
  authDomain: "fir-uploadimg-b05a4.firebaseapp.com",
  projectId: "fir-uploadimg-b05a4",
  storageBucket: "fir-uploadimg-b05a4.appspot.com",
  messagingSenderId: "992162934952",
  appId: "1:992162934952:web:854be4e70b1cc88386529d",
  measurementId: "G-89LSZQES37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
