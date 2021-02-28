import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD9jERLGOKIlpg5XB-ud37t7m-_HzR7n9A",
  authDomain: "instagram-clone-99bec.firebaseapp.com",
  projectId: "instagram-clone-99bec",
  storageBucket: "instagram-clone-99bec.appspot.com",
  messagingSenderId: "890731259333",
  appId: "1:890731259333:web:a687d200e49004adc597ac",
  measurementId: "G-DZPT5ZSXY5",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
