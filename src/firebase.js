import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLNK6khkdhAeDmKPVPOLQP9ZYZlw8JaCU",
  authDomain: "netflix-clone-71028.firebaseapp.com",
  projectId: "netflix-clone-71028",
  storageBucket: "netflix-clone-71028.appspot.com",
  messagingSenderId: "62745566086",
  appId: "1:62745566086:web:fc59dc536562d6ab086a07",
  measurementId: "G-9CZ8FFBW34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //intializing our app on firebase

const db = firebase.firestore(); // importing the firestore that is the fatabse that firebase provides to store the data

const auth = firebase.auth(); // importing the authentication modules from the firebase

export { auth }; //now exporting all the function so that we can use it.
export default db;
