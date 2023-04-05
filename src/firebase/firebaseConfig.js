import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNGtmKWBNswkZiK1psonsyJxI3fkCSnjo",
  authDomain: "claymorphism-clock.firebaseapp.com",
  projectId: "claymorphism-clock",
  storageBucket: "claymorphism-clock.appspot.com",
  messagingSenderId: "660330892070",
  appId: "1:660330892070:web:6973764c8cf9ca4f998fe7",
  measurementId: "G-1H4SMN1ZF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
