// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSoOIFvMSUxjpJb5m8pUOR1TnZOYMKCkE",
  authDomain: "toytopia-project.firebaseapp.com",
  projectId: "toytopia-project",
  storageBucket: "toytopia-project.appspot.com",
  messagingSenderId: "904111649301",
  appId: "1:904111649301:web:f61d2cb56e07339af4941c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Default export
export default app;
