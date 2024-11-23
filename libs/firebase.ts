// lib/firebaseClient.ts
import { initializeApp } from "firebase/app";
import { AuthCredential, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, validatePassword } from "firebase/auth";

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
  console.log(`email`, email)
  console.log(` password`, password)
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    const token = await user.getIdToken();
    return { userToken: token }
  } catch (error: any) {
    return { error: error.code }
  }

};


export const resetPassword = async (email: string) => {
  try {
    const res = await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    return { error: error.code }
  }
}

export const loginWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
    const token = await user.getIdToken();
    return { userToken: token }
  } catch (error: any) {
    console.log(`type of error`, typeof error)
    return {
      error: error.message
    }
  }

}


const passwordValidate = async (password: string) => {
  try {
    const result = await validatePassword(getAuth(), password);
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


export const googleSignIn = async () => {
  const googleAuthProvider = new GoogleAuthProvider()
  googleAuthProvider.setCustomParameters({
    prompt: 'select_account' // Forces the account selection

  });
  const res = await signInWithPopup(auth, googleAuthProvider)
  const user = res.user;
  const { token } = await user.getIdTokenResult();
  return { token }
}


export const githubSignIn = async (): Promise<any> => {
  const githubAuthProvider = new GithubAuthProvider();
  const res = await signInWithPopup(auth, githubAuthProvider)
  const user = res.user
  const { token } = await user.getIdTokenResult();
  console.log(`token`, token)
  return { token }

}



export const signOutProvider = async () => {
  signOut(auth)
}


export const getInfoSign = async (email: string) => {
  const signInMethods = await fetchSignInMethodsForEmail(auth, email);
  console.log(`signInMethods`, signInMethods);
}

export { auth, createUser, passwordValidate };

