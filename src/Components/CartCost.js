import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";

function CartCost() {
  const items = useSelector(getItemsSelector);
  console.log('cart tiems are:', items);
 
  const subtotal = useMemo(() => {
    console.time("subtotal");
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.count;
    });
    console.timeEnd("subtotal");
    return total.toFixed(2);
  }, [items]);

  useEffect(() => {
    console.log("Cart items changed");
  }, [items]);

  if (subtotal > 0) {
    return (
      <>
        <div className="sticky-note">
          <h6>Cart cost {subtotal}</h6>
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default CartCost;
