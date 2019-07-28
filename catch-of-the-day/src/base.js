import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB4QPegUDZy0QChZWIBrsma-umvL6bjpyA",
    authDomain: "catch-of-the-day-britt.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-britt.firebaseio.com",
 });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;