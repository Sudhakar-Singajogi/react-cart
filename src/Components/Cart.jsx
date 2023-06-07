import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slices/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector(getItemsSelector);

  let total = items.reduce((a, b) => a + b.quantityPrice, 0);
  total = total.toFixed(2);
  return (
    <>
      <div
        className="alert alert-success"
        style={{ textAlign: "right", marginTop: "10px" }}
      >
        <h6>
          Total Items: {items.length} (Rs. {total})/-
        </h6>
      </div>
      <h3>Cart</h3>
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
                <tr
                  key={product.id}
                  style={{ fontWeight: "bold" }}
                > 
                <CartItem {...product} />
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
