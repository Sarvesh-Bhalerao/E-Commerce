import { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "../utils/firebase/firebase.utils";

//actual value
export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    const unSubscribe = onAuthStateChangedListner((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setcurrentUser(user);
    });
    return unSubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
