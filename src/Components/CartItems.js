import { useCallback, useMemo } from "react";
import { useState, useSelector } from "react-redux";

const CartItems = () => {
  const items = useSelector((state) => state.cart);
  const cartItems = useCallback(() => { 
    console.log('hey am running');
    return items;
  }, [items]);

  return cartItems;
};

export default CartItems;
