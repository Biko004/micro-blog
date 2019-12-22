import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyClwA0nS8xWRzUk76F4m11ATulQ90-LMQA",
    authDomain: "microblog-5a3cb.firebaseapp.com",
    databaseURL: "https://microblog-5a3cb.firebaseio.com",
    projectId: "microblog-5a3cb",
    storageBucket: "microblog-5a3cb.appspot.com",
    messagingSenderId: "310159030198",
    appId: "1:310159030198:web:b8a682218926d126b1f317"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
const tweetsCollection = firestore.collection("tweets")

export function getTweets() {
    return tweetsCollection
        .orderBy('date','desc')
        .limit(10)
        .get()
}


export function postTweet(tweet) {
  return tweetsCollection.add(tweet)
}
