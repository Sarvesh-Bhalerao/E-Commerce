import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGhJBABkJSttv-HyN_0JePbWM13NrBR_s",
  authDomain: "ecom-db-9097b.firebaseapp.com",
  projectId: "ecom-db-9097b",
  storageBucket: "ecom-db-9097b.appspot.com",
  messagingSenderId: "993581650794",
  appId: "1:993581650794:web:9f7ebeffd836f7a9d7cb13",
};

const firebaseApp = initializeApp(firebaseConfig);

//Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  //   user is a collection

  console.log(userDocRef);
  // snapshot is a special object
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user data exists

  //if user data is not exist -> then set document with data from userauth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserwithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
