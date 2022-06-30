import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../context/cart-context";
import CartItem from "../cart-item/cart-item.component";
// import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartitems } = useContext(CartContext);
  const navigate = useNavigate();

  //   one of the way instead of using link
  const gotocheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))}
      </div>

      <Button onClick={gotocheckout}> CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
