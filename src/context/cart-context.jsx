import { createContext, useEffect, useState } from "react";

const addcartitem = (cartitems, producttoadd) => {
  const existingcartitem = cartitems.find(
    (cartit) => cartit.id === producttoadd.id
  );

  if (existingcartitem) {
    return cartitems.map((cartitt) =>
      cartitt.id === producttoadd.id
        ? { ...cartitt, quantity: cartitt.quantity + 1 }
        : cartitt
    );
  }

  return [...cartitems, { ...producttoadd, quantity: 1 }];
};

const removeCartItem = (cartitems, productToremove) => {
  const existingcartitem = cartitems.find(
    (cartit) => cartit.id === productToremove.id
  );

  if (existingcartitem.quantity === 1) {
    return cartitems.filter((citem) => citem.id !== productToremove.id);
  }

  return cartitems.map((cartitt) =>
    cartitt.id === productToremove.id
      ? { ...cartitt, quantity: cartitt.quantity - 1 }
      : cartitt
  );
};

const clearitem = (cartitems, productToclear) => {
  return cartitems.filter((citem) => citem.id !== productToclear.id);
};

export const CartContext = createContext({
  isCartOpen: "false",
  setIsCartOpen: () => {},
  cartitems: [],
  addItemToCart: () => {},
  removeFromCartItem: () => {},
  clearitemFromCart: () => {},
  cartcount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartitems, setcartitems] = useState([]);
  const [cartcount, setcartcount] = useState(0);

  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    const newcartcount = cartitems.reduce(
      (total, cartiteeem) => total + cartiteeem.quantity,
      0
    );
    setcartcount(newcartcount);
  }, [cartitems]);

  useEffect(() => {
    const newcarttotal = cartitems.reduce(
      (total, cartiteeem) => total + cartiteeem.quantity * cartiteeem.price,
      0
    );
    setcartTotal(newcarttotal);
  }, [cartitems]);

  const addItemToCart = (productToAdd) => {
    setcartitems(addcartitem(cartitems, productToAdd));
  };

  const removeFromCartItem = (productToremove) => {
    setcartitems(removeCartItem(cartitems, productToremove));
  };
  const clearitemFromCart = (productToclear) => {
    setcartitems(clearitem(cartitems, productToclear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeFromCartItem,
    clearitemFromCart,
    cartitems,
    cartcount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
