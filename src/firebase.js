import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClwA0nS8xWRzUk76F4m11ATulQ90-LMQA",
    authDomain: "microblog-5a3cb.firebaseapp.com",
    databaseURL: "https://microblog-5a3cb.firebaseio.com",
    projectId: "microblog-5a3cb",
    storageBucket: "microblog-5a3cb.appspot.com",
    messagingSenderId: "310159030198",
    appId: "1:310159030198:web:b8a682218926d126b1f317"
});

const db = firebaseApp.firestore();

export { db };