import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../firebase-applet-config.json';

const firebaseConfigFromEnv = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_DATABASE_ID || "(default)"
};

// Use environment variables if they are set, otherwise fall back to the JSON config
const finalConfig = {
  ...firebaseConfig,
  ...(firebaseConfigFromEnv.apiKey ? firebaseConfigFromEnv : {})
};

const app = initializeApp(finalConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, finalConfig.firestoreDatabaseId);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Test connection to Firestore
import { getDocFromServer, doc, getDoc, setDoc } from 'firebase/firestore';
async function testConnection() {
  try {
    console.log("Starting Firestore connection test with final config:", {
      projectId: finalConfig.projectId,
      apiKey: finalConfig.apiKey ? "PRESENT" : "MISSING",
      authDomain: finalConfig.authDomain,
      databaseId: finalConfig.firestoreDatabaseId
    });
    
    // Try both server and cache to see if it's a server-only issue
    // We use a specific document that we know we have rules for
    const testDocRef = doc(db, 'test', 'connection');
    
    const snap = await getDoc(testDocRef);
    console.log("Firestore connection test (cached/server) successful");
    
    try {
      const serverSnap = await getDocFromServer(testDocRef);
      console.log("Firestore connection test (server-only) successful");
      
      // Try to write to verify write permissions
      await setDoc(testDocRef, { lastTest: new Date().toISOString(), status: 'OK' }, { merge: true });
      console.log("Firestore write test successful");
    } catch (serverError: any) {
      console.warn("Firestore Server-only Test Failed (might be offline or rules issue):", serverError);
      if (serverError.message && serverError.message.includes('permission')) {
        console.error("PERMISSION ERROR: Check firestore.rules for the 'test' collection.");
      }
    }
  } catch (error: any) {
    console.error("Firestore Connection Test Failed:", error);
    if (error && error.message && error.message.includes('the client is offline')) {
      console.error("CRITICAL: Could not reach Firestore. This usually means the Firebase configuration (Project ID, API Key) is incorrect or the database is not provisioned.");
    }
  }
}
testConnection();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);
export { signInWithEmailAndPassword, createUserWithEmailAndPassword };
