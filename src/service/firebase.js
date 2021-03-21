import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBmYiwrKAK4VuMaxmQXZzD5CYdUOLx6078",
    authDomain: "pokemon-cardz.firebaseapp.com",
    databaseURL: "https://pokemon-cardz-default-rtdb.firebaseio.com",
    projectId: "pokemon-cardz",
    storageBucket: "pokemon-cardz.appspot.com",
    messagingSenderId: "258144951272",
    appId: "1:258144951272:web:53b2060a3ca2ba60b2625d"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;