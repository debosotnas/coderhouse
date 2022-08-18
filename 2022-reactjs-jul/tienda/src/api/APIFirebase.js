import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiglqt_hf3CYqNHe3WPQ7fAER0PODP5E8",
  authDomain: "codercurso-ago-22.firebaseapp.com",
  projectId: "codercurso-ago-22",
  storageBucket: "codercurso-ago-22.appspot.com",
  messagingSenderId: "527807482213",
  appId: "1:527807482213:web:47be360d64223dda8e398c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// seleccionar la base de datos de Firestore
export const DB = getFirestore(app);