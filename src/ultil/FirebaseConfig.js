// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDvL8TUUFF54s1UGaAJr-iwUAhXyOaeE-Q",
  authDomain: "test-3136e.firebaseapp.com",
  projectId: "test-3136e",
  storageBucket: "test-3136e.appspot.com",
  messagingSenderId: "941382577144",
  appId: "1:941382577144:web:8d65e8d1fe8340c6d8c40d"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();