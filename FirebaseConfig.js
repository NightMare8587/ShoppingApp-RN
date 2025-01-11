// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYdAerrcU_sYUkRAQBDCAZfW4M_21yl0",
  authDomain: "shoppingapp-rn.firebaseapp.com",
  projectId: "shoppingapp-rn",
  storageBucket: "shoppingapp-rn.firebasestorage.app",
  messagingSenderId: "438895358528",
  appId: "1:438895358528:web:518382657298702f5ee5a5",
  measurementId: "G-2MJE556QEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
