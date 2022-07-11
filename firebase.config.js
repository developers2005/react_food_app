import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbWlbj1bA6ewW2DSjzoH9XDMYmscmCDRY",
  authDomain: "reactfooddeliver.firebaseapp.com",
  databaseURL: "https://reactfooddeliver-default-rtdb.firebaseio.com",
  projectId: "reactfooddeliver",
  storageBucket: "reactfooddeliver.appspot.com",
  messagingSenderId: "954449726590",
  appId: "1:954449726590:web:42fd263858dfe732c3dc2f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
