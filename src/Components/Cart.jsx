import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const items = useSelector(getItemsSelector);
  console.log("cart items are:", items);

  return (
    <>
      <h3 className="mt-3">Cart</h3>
      <table className="table table-responsive">
        <thead>
          <th>Image</th>
          <th>Product Name</th>
          <th>Cost Per Item</th>
          <th>Quantity</th>
          <th>Action</th>
        </thead>
        <tbody>
          {items.map((product, index) => {
            return (
              <>
                <tr key={product.id} style={{ fontWeight: "bold" }}>
                  <CartItem key={product.id} {...product} />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
