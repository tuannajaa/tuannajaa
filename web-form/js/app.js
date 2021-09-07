import { initializeApp } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
    apiKey: "AIzaSyDAM3oNZkcaKgqp__viNxWxwXUSQt8ay6Y",
    authDomain: "learn-firebase-5e09e.firebaseapp.com",
    projectId: "learn-firebase-5e09e",
    storageBucket: "learn-firebase-5e09e.appspot.com",
    messagingSenderId: "850650983302",
    appId: "1:850650983302:web:32599e6e0ef4c54a2d9a07",
    measurementId: "G-TLEX0E8N08"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }