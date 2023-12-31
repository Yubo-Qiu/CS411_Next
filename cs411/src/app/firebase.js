// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgQqt24mKjtBUcsdejcPYgdRO3jszBbsg",
  authDomain: "cs411-team-project.firebaseapp.com",
  databaseURL: "https://cs411-team-project-default-rtdb.firebaseio.com",
  projectId: "cs411-team-project",
  storageBucket: "cs411-team-project.appspot.com",
  messagingSenderId: "935969582962",
  appId: "1:935969582962:web:a4aaddcbb1b0fd87f077eb",
  measurementId: "G-PVLTS6WXMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const database = getDatabase(app);
export { database };



