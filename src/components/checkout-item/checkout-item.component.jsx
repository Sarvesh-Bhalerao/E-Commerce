import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const CheckoutItemEach = ({ cartitem }) => {
  const { imageUrl, name, quantity, price } = cartitem;
  const { clearitemFromCart, addItemToCart, removeFromCartItem } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeFromCartItem(cartitem)}>
          {" "}
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartitem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearitemFromCart(cartitem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItemEach;
