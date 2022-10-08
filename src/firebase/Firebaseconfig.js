import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC16V4RZ7Jb6YDdgdnIiYrTUu6uqkU84CQ",
  authDomain: "firstfireproject-73178.firebaseapp.com",
  projectId: "firstfireproject-73178",
  storageBucket: "firstfireproject-73178.appspot.com",
  messagingSenderId: "559825432621",
  appId: "1:559825432621:web:3c86f734cc9ba59c87c8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)