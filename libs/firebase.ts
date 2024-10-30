// lib/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdkLuisv-AT6PQrLAyE_7Kb4reHHLC_b0",
  authDomain: "mastery-js-16978.firebaseapp.com",
  projectId: "mastery-js-16978",
  storageBucket: "mastery-js-16978.appspot.com",
  messagingSenderId: "116925348514",
  appId: "1:116925348514:web:beea59cc3c1dacfc0a35fb",
  measurementId: "G-D6HFG8G2DQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

