import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";
import * as Auth from "firebase/auth";
import config from "../config";

const { App } = config;
// Optionally import the services that you want to use
//import {...} from "firebase/database";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = initializeApp({
  apiKey: App.FirebaseConfig.apiKey,
  authDomain: App.FirebaseConfig.projectId,
  projectId: App.FirebaseConfig.projectId,
  storageBucket: App.FirebaseConfig.storageBucket,
  messagingSenderId: App.FirebaseConfig.messagingSenderId,
  appId: App.FirebaseConfig.appId,
  measurementId: App.FirebaseConfig.measurementId,
});

const DB = firestore.getFirestore(firebaseConfig);
const FirebaseAuth = Auth.getAuth(firebaseConfig);

export { FirebaseAuth, DB };
