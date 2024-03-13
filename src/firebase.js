import firebase from 'firebase';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// c


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB_HgfPndaepqcLPz0qlg4I9vnASoyq1u0",
  authDomain: "project-2-3df83.firebaseapp.com",
  projectId: "project-2-3df83",
  storageBucket: "project-2-3df83.appspot.com",
  messagingSenderId: "828661145509",
  appId: "1:828661145509:web:5e027987165bfa1e83d24c"
};


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
// const firebaseConfig = {
//     apiKey: "AIzaSyA2IFITleePcyGxQ3yH0uJqKnIX5GxfpKg",
//     authDomain: "sample-01-816d2.firebaseapp.com",
//     databaseURL: "https://sample-01-816d2-default-rtdb.firebaseio.com",
//     projectId: "sample-01-816d2",
//     storageBucket: "sample-01-816d2.appspot.com",
//     messagingSenderId: "725789126212",
//     appId: "1:725789126212:web:3e9a3e5f2ed9cca4239611"
//   };

const firebaseApp = firebase.initializeApp(firebaseConfig); // Connects to our database
const db = firebaseApp.firestore(); // Get db
const auth = firebase.auth(); // This gives us access to auth (login support)

const googleProvider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage();

export { db, auth, googleProvider, storage };