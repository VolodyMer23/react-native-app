import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKE6Z6vUeTAvLpRK0ReErVAC-_RGDZdew",
  authDomain: "rnapp-a3e84.firebaseapp.com",
  projectId: "rnapp-a3e84",
  storageBucket: "rnapp-a3e84.appspot.com",
  messagingSenderId: "1020677018814",
  appId: "1:1020677018814:web:cb8657e86236b782a93aef",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

