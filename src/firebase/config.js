import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsLoFDpUyMKRh2BUzPTZayOKMzYxbbDnE",
  authDomain: "react-88206.firebaseapp.com",
  projectId: "react-88206",
  storageBucket: "react-88206.firebasestorage.app",
  messagingSenderId: "19976742067",
  appId: "1:19976742067:web:4c4044bce8a45a2fbc3cc6",
  measurementId: "G-4TMY454RCJ"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}