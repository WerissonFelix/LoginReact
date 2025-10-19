import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyD1SAIgYdKQObJKm1csYyObxK0TFdjhw-g",
    authDomain: "testetestado-386d4.firebaseapp.com",
    projectId: "testetestado-386d4",
    storageBucket: "testetestado-386d4.firebasestorage.app",
    messagingSenderId: "1053406851327",
    appId: "1:1053406851327:web:8cc0b113c9b6d999671cca",
    measurementId: "G-1PQGKTFT34"
};
const app = initializeApp(config);

const db = getFirestore(app);

export {db};
