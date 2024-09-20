// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Para Firestore, si es necesario
import { getAuth } from "firebase/auth"; // Para autenticación, si es necesario

const firebaseConfig = {
    apiKey: "AIzaSyA8-IxXsAmYEYrbdrt8IH_A-KLKEn5hwkg",
    authDomain: "clinica-de-la-costa.firebaseapp.com",
    projectId: "clinica-de-la-costa",
    storageBucket: "clinica-de-la-costa.appspot.com",
    messagingSenderId: "785937294926",
    appId: "1:785937294926:web:e08a0f5308dee8f8c4051f",
    measurementId: "G-GYMV26QCCB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Si usas Firestore
const auth = getAuth(app);    // Si usas autenticación

export { db, auth };
