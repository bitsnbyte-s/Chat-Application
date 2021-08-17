import firebase from 'firebase/app';
import "firebase/auth";

export const auth=firebase.initializeApp({
    apiKey: "AIzaSyBqdapbhxdvifdJkIleUen9TMS_FDzUXgk",
  authDomain: "chatapplication-83588.firebaseapp.com",
  projectId: "chatapplication-83588",
  storageBucket: "chatapplication-83588.appspot.com",
  messagingSenderId: "95524523109",
  appId: "1:95524523109:web:d495ed496120077c100a8c",
  measurementId: "G-8X3C0KGKTT"
}).auth();