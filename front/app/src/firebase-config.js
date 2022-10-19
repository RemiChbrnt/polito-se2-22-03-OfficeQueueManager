import {initializeApp } from 'firebase/app';
import "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
        /*apiKey: process.env.REACT_APP_FIREBASE_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STROAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID*/

        apiKey: "AIzaSyCxnqH3c1vnAFnU_7AozFvrw06g7ADmLAg",
        authDomain: "software-engineering-2-ae362.firebaseapp.com",
        projectId: "software-engineering-2-ae362",
        storageBucket: "software-engineering-2-ae362.appspot.com",
        messagingSenderId: "272556315457",
        appId: "1:272556315457:web:79bde486091d308f9c87c0",
        measurementId: "G-YE1NPY4KGP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
