import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuareYz1qZG_oEOdnL-uqU1YCtctd9xzQ",
  authDomain: "disneyv2-e19e4.firebaseapp.com",
  projectId: "disneyv2-e19e4",
  storageBucket: "disneyv2-e19e4.appspot.com",
  messagingSenderId: "999595974121",
  appId: "1:999595974121:web:27dcb62b8e970374957f78",
  measurementId: "G-8782J50TZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
