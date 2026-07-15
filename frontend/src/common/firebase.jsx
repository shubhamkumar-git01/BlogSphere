import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB_w-921AX6oVgd-ISElyeiYZB52G4UiaM",
  authDomain: "blogsphere-fc708.firebaseapp.com",
  projectId: "blogsphere-fc708",
  storageBucket: "blogsphere-fc708.firebasestorage.app",
  messagingSenderId: "761069346595",
  appId: "1:761069346595:web:a3915807ecbe28fc43f696",
  measurementId: "G-1BTJBYX7R8"
};


const app = initializeApp(firebaseConfig);

//Google Auth
const provider = new GoogleAuthProvider()
const auth = getAuth()

export const authWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (err) {
    console.error("Firebase Auth Error:", err);
    throw err;
  }
}