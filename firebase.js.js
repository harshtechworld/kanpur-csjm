import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// Firebase Console ka config details
const firebaseConfig = {
  apiKey: "AIzaSyCRgKwLBR_1ZHp0xvbsT7oAvkUuLhzgfJY",
  authDomain: "kanpur-csjmu-pics.firebaseapp.com",
  projectId: "kanpur-csjmu-pics",
  storageBucket: "kanpur-csjmu-pics.firebasestorage.app",
  messagingSenderId: "12855357184",
  appId: "1:12855357184:web:adbd9e284ccd6f86c04de5",
  measurementId: "G-ZFLLDWLY7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication service export karein
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Sign Up Function (Naya user banane ke liye)
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Account successfully ban gaya hai!");
    return userCredential.user;
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// Login Function (Existing user ke liye)
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    return userCredential.user;
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

// Google Sign-In Function
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    alert("Google Login Successful! Welcome " + result.user.displayName);
    return result.user;
  } catch (error) {
    alert("Google Login Error: " + error.message);
  }
};