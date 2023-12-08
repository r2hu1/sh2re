import { initializeApp } from "firebase/app";
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6kkPiiCZjsNrZjQ2w98AunNsolZUxkwA",
    authDomain: "sh2re-14728.firebaseapp.com",
    projectId: "sh2re-14728",
    storageBucket: "sh2re-14728.appspot.com",
    messagingSenderId: "179247122684",
    appId: "1:179247122684:web:1438f4a86dad6c2c82af79",
    measurementId: "G-3V3C7W8YJD"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}