import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxjXe_HvqPjI38Pgkx5tsow2HaniV1Pjo",
  authDomain: "silvyastro.firebaseapp.com",
  projectId: "silvyastro",
  storageBucket: "silvyastro.firebasestorage.app",
  messagingSenderId: "368957227231",
  appId: "1:368957227231:web:eff05873fdcfd29d96696a",
  measurementId: "G-G97V3ZYWRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;