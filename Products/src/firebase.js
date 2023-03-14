import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi6G40jIx3qS4bQKPXNeGZFwRBR8ljKes",
  authDomain: "sincere-elixir-329614.firebaseapp.com",
  projectId: "sincere-elixir-329614",
  storageBucket: "sincere-elixir-329614.appspot.com",
  messagingSenderId: "550334072060",
  appId: "1:550334072060:web:58cc5f63fc3e377f8ec379",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
