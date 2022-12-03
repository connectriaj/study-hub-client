// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRO1tFopVyVpAXFl_-2VnnTlpBoH4uYg4",
  authDomain: "study-hub-client.firebaseapp.com",
  projectId: "study-hub-client",
  storageBucket: "study-hub-client.appspot.com",
  messagingSenderId: "834436871095",
  appId: "1:834436871095:web:e4bf0fe6da59da97992e32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
