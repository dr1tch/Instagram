import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDb } from "../seeds";
const config = {
    apiKey: "AIzaSyCtWQqRaxyEzSkR2jYQGWs3rNqrt0QCmzo",
    authDomain: "instagram-clone-a9f8a.firebaseapp.com",
    projectId: "instagram-clone-a9f8a",
    storageBucket: "instagram-clone-a9f8a.appspot.com",
    messagingSenderId: "310769110922",
    appId: "1:310769110922:web:b4430e85f9054d25bec273",
    measurementId: "G-GWMN0PYR2X",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDb(firebase);

export { firebase, FieldValue };