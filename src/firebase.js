// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApW4S0gnKGUjeQbZniVAFdDdWCDMnaLyc",
  authDomain: "financely-8ddba.firebaseapp.com",
  projectId: "financely-8ddba",
  storageBucket: "financely-8ddba.appspot.com",
  messagingSenderId: "833421885001",
  appId: "1:833421885001:web:bbc53cd0991929d1850998",
  measurementId: "G-NLWDKCN2SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };