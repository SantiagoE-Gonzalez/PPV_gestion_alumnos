import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZKALVykHTLNTtyO_LkMl-yW1kvjPlyoc",
    authDomain: "ppv-teclab.firebaseapp.com",
    projectId: "ppv-teclab",
    storageBucket: "ppv-teclab.appspot.com",
    messagingSenderId: "861458358882",
    appId: "1:861458358882:web:651d7944ba91939e5ca73b",
    measurementId: "G-H11KR3ZNWL"
};


const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app) //exporto la autenticacion
export const db = getFirestore(app);