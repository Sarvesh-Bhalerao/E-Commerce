import "./checkout.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../../context/cart-context";
import CheckoutItemEach from "../../checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartitems, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h1>Lets Buy It !</h1>

      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>

          <div className="header-block">
            <span>Description</span>
          </div>

          <div className="header-block">
            <span>Quantity</span>
          </div>

          <div className="header-block">
            <span>Price</span>
          </div>

          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartitems.map((singleitem) => {
          return <CheckoutItemEach key={singleitem.id} cartitem={singleitem} />;
        })}

        <span className="total">Total : ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
