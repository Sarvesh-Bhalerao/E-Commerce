import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crwn } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navigate = () => {
  const { currentUser, setcurrentUser } = useContext(UserContext);
  console.log(currentUser);

  // const signOutHandler = async () => {
  //   const res = await signOutUser();
  //   console.log(res);
  //   setcurrentUser(null);
  // };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwn />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN-OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigate;
