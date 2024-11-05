// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLHu7OQRlgVvU9E_CnYZEWsnST4sYV2y0",
    authDomain: "hsharjeel-8f89d.firebaseapp.com",
    projectId: "hsharjeel-8f89d",
    storageBucket: "hsharjeel-8f89d.appspot.com",
    messagingSenderId: "809481906854",
    appId: "1:809481906854:web:c7c9789017b53a6feaa267",
    measurementId: "G-J11WP3J1RY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage };
