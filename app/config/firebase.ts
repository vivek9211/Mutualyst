import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

/**
 * Firebase configuration
 * @const {Object}
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDk-p-uoBlHs_RZ_-V6xAcbyRGCzlS06mU",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "mutualyst-9211.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "mutualyst-9211",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "mutualyst-9211.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "1081329231722",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:1081329231722:web:e0d059a9d0a5a0c48d2713",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-SWPP927NG6"
};

/**
 * Initialize Firebase app instance
 * @returns {Object} Firebase app instance
 */
const initializeFirebase = () => {
  try {
    return initializeApp(firebaseConfig);
  } catch (error) {
    throw new Error(`Firebase initialization failed: ${error}`);
  }
};

// Initialize Firebase app
const app = initializeFirebase();

// Initialize Firebase Authentication
const auth = getAuth(app);

// Set up authentication state observer
onAuthStateChanged(auth, (user) => {
  user ? console.log('User is signed in:', user.email) : console.log('User is signed out');
});

export { auth };
export default app;