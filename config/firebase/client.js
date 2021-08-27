import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_API_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

export const persistenceMode = firebase.auth.Auth.Persistence.LOCAL

// Initialize Firebase
// firebase.analytics();
export default app
