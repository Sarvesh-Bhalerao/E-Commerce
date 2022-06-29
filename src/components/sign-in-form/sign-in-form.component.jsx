import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserwithEmailandPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signINAuthUserwithEmailandPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setcurrentUser } = useContext(UserContext);

  // console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const SignInwithGoogle = async () => {
    await signInWithGooglePopup();
    // setcurrentUser(user);
    // console.log(user);

    // const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetformfields = () => {
    setformFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signINAuthUserwithEmailandPassword(
        email,
        password
      );

      // setcurrentUser(user);
      // console.log(response);
      resetformfields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("Wrong Password");
      } else if (err.code === "auth/user-not-found") {
        alert("No user Found!!");
      } else {
        console.log("Error !!", err);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have an ACCOUNT </h2>
      <span>Sign In with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttontype="" type="submit">
            Sign IN
          </Button>
          {/*Type of button is button to prevent auto type of submit*/}
          <Button type="button" onClick={SignInwithGoogle} buttontype="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
