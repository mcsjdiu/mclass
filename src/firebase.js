// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeK65YjMyYM0IcpmQlK1dTYZtKjmH5ZPA",
  authDomain: "myclass-64e38.firebaseapp.com",
  projectId: "myclass-64e38",
  storageBucket: "myclass-64e38.appspot.com",
  messagingSenderId: "804707743405",
  appId: "1:804707743405:web:53c17c668286f30e987824",
  measurementId: "G-4VK3D7K49T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();