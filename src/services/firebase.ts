import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { Firestore, getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
        apiKey: 'AIzaSyCsspZaREBG-W3mobWwPAFIs8wAiUtbB1I',
        authDomain: 'waps-21c0d.firebaseapp.com',
        projectId: 'waps-21c0d',
        storageBucket: 'waps-21c0d.appspot.com',
        messagingSenderId: '266305197084',
        appId: '1:266305197084:web:6939bd1e94be34a0c9fbd9',
        measurementId: 'G-MC555DCP6C',
}

const firebaseApp = initializeApp(FIREBASE_CONFIG)
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
