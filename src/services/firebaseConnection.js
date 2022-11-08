// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJvSziO0aZwtpW8MQjvClnvvWuv1jZXq0",
  authDomain: "devlinks-592ab.firebaseapp.com",
  projectId: "devlinks-592ab",
  storageBucket: "devlinks-592ab.appspot.com",
  messagingSenderId: "1084970418781",
  appId: "1:1084970418781:web:1074a4374f5a89025083b4",
  measurementId: "G-L8RQZF712Q"
};

const firebaseApp= initializeApp(firebaseConfig)

const db=getFirestore(firebaseApp)
const auth=getAuth(firebaseApp)

export {db,auth};