import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = { 
    apiKey: "AIzaSyCG34IRrU-PrwEo7YDBpIV4PkYiw23sg-8",
    authDomain: "react-chat-app-7c84f.firebaseapp.com",
    projectId: "react-chat-app-7c84f",
    storageBucket: "react-chat-app-7c84f.appspot.com",
    messagingSenderId: "84578909135",
    appId: "1:84578909135:web:361a060860ed0c568830ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()