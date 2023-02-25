// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwBdxVOcotYYON1fDW9OLFLM5Yx5wORTg",
  authDomain: "todo-list-3e2b5.firebaseapp.com",
  projectId: "todo-list-3e2b5",
  storageBucket: "todo-list-3e2b5.appspot.com",
  messagingSenderId: "1093752522642",
  appId: "1:1093752522642:web:0431f68bf535a78245634b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);