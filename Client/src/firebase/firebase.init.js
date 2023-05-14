// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASHfyJ_1t3hAZnCEOoxXTJmfMut90yZD4",
  authDomain: "chocolate-manegement.firebaseapp.com",
  projectId: "chocolate-manegement",
  storageBucket: "chocolate-manegement.appspot.com",
  messagingSenderId: "433054459504",
  appId: "1:433054459504:web:6197f509b0ff9e3c01f6b5",
  measurementId: "G-YDMXJL0M60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);