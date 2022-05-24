// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaBCRz0SfdpVx9Ko1H3JNonBKy9h-9YpY",
    authDomain: "computer-accessories01.firebaseapp.com",
    projectId: "computer-accessories01",
    storageBucket: "computer-accessories01.appspot.com",
    messagingSenderId: "90065659156",
    appId: "1:90065659156:web:6b65c95c717cb52b378e01",
    measurementId: "G-EPFE46F37Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;