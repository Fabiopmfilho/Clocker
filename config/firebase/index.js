import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCr4bqD2kGS3NL0AJBQaNLpkF2pGlKM2rM",
    authDomain: "clocker-work-io.firebaseapp.com",
    projectId: "clocker-work-io",
    storageBucket: "clocker-work-io.appspot.com",
    messagingSenderId: "670663804885",
    appId: "1:670663804885:web:1f75625620d8c5d5989f5c",
    measurementId: "G-Z350GSBKQV"
};

// enviar para dotEnv
// Initialize Firebase
export default firebase.apps.length 
    ? firebase.app() 
    : firebase.initializeApp(firebaseConfig);
// firebase.analytics();