import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwTiPd9ilvhIonXMfFgoXq9I3eClz5Nlk",
  authDomain: "meetingevent-90a9d.firebaseapp.com",
  databaseURL: "https://meetingevent-90a9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "meetingevent-90a9d",
  storageBucket: "meetingevent-90a9d.appspot.com",
  messagingSenderId: "837447657224",
  appId: "1:837447657224:web:d864201e06faa58244aebd",
  measurementId: "G-537ZWGR535"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);