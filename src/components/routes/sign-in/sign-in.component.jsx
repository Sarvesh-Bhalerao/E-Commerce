import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  // //Google redirect not going to use
  // const func = async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // };
  // useEffect(() => {
  //   func();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // const response = await signInWithGooglePopup();
    // console.log(response);
    console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   console.log(user);
  // };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign In with Google PopUp</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
