
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js'


const firebaseConfig = {
  apiKey: "AIzaSyCsz7G6RiivIZffPg7KV-vJU8jvjZ4c2j8",
  authDomain: "example-project-e2910.firebaseapp.com",
  projectId: "example-project-e2910",
  storageBucket: "example-project-e2910.firebasestorage.app",
  messagingSenderId: "257318415314",
  appId: "1:257318415314:web:fc302fcbd8d62d1981b60b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword
}