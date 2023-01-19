import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDpL_BvMedGEMV3p0yUFEAZJtt-6prTjL0",
    authDomain: "chat-room-505fc.firebaseapp.com",
    projectId: "chat-room-505fc",
    storageBucket: "chat-room-505fc.appspot.com",
    messagingSenderId: "841573061606",
    appId: "1:841573061606:web:0e94fe23143ce8caefbc27"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);