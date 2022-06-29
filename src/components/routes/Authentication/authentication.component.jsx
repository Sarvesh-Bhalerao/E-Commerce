import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
const Authentication = () => {
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

  //Included in SIgn iN
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // const response = await signInWithGooglePopup();
  //   // console.log(response);
  //   console.log(user);

  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   console.log(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
