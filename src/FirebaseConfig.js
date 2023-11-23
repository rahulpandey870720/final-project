// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA_BzXGWj2TAL8C_Wo6gG9lL-27zPcgk5s",
  authDomain: "react-project-f8158.firebaseapp.com",
  projectId: "react-project-f8158",
  storageBucket: "react-project-f8158.appspot.com",
  messagingSenderId: "1014733612553",
  appId: "1:1014733612553:web:2f4f23a34443b71cc53ad8",
  measurementId: "G-70M4NL5N8P"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//  firestore initialization
 export const db= getFirestore(app);
//  storeg initialization
 export const storage = getStorage(app);
//  authentication
export const auth = getAuth(app);