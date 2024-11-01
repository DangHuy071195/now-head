// lib/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, validatePassword } from "firebase/auth";

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

const createUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
  } catch (error) {

  }
};


const passwordValidate = async (password: string) => {
  try {
    const result = await validatePassword(getAuth(), password);
    console.log(`result`, result);
    if (!result.isValid) {
      // Password could not be validated. Use the status to show what
      // requirements are met and which are missing.

      // If a criterion is undefined, it is not required by policy. If the
      // criterion is defined but false, it is required but not fulfilled by
      // the given password. For example:
      const needsLowerCase = result.containsLowercaseLetter !== true;
    }
    return result
  } catch (error) {
    console.error('Error validating password:', error);
  }
}

const googleAuthProvider = new GoogleAuthProvider()

export const googleSignIn = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider)
    const user = res.user;
    const { token } = await user.getIdTokenResult();
    return { token }
  } catch (error) {
    console.log(`error`, error)
    return error
  }
}


export const githubSignIn = async (): Promise<any> => {
  try {
    const githubAuthProvider = new GithubAuthProvider();
    const res = await signInWithPopup(auth, githubAuthProvider)
    const user = res.user
    const { token } = await user.getIdTokenResult();
    return { token }
  } catch (error) {
    return error
  }
}

export const signOutProvider = async () => {
  signOut(auth)
}

export { auth, createUser, passwordValidate };

