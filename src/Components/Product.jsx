import React, { useState, useEffect, useMemo } from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CheckProductAdded } from "../Utils/CartBL";
import { useSelector } from "react-redux";

import AddToCartButton from "../Components/AddToCartButton";
import CartItems from "./CartItems"; 

const Product = (properties) => { 
  const props = properties.params.products; 
  const cartitems = properties.params.cartItems; 
  // const items = useSelector((state) => state.cart); 
  const [isAdded, setIsAdded] = useState([]);
  const dispatch = useDispatch(); 
  const cartItems = properties.params.cartItems(); 
  
  useEffect(() => {
    console.log('cart tiems are:', cartItems)
  }, [cartItems]);

  useEffect(() => {}, [isAdded]);
  
  const getPrdInCart = (prdid) => {
    let obj = { id: prdid, inCart: false };
    cartItems.map((prd) => {
      if (prd.id === prdid) {
        obj.inCart = true;
      }
    })

    return obj;
  };

  const handleAddCart = (prdObj) => {
    console.log('prdObj:', prdObj)
    dispatch(addItem(prdObj));
    
    let inCart = CheckProductAdded(prdObj.id.toString(), cartItems);
    if (!inCart) {
      setIsAdded((prev) => [...prev, { id: prdObj.id }]);
    }
  };

  return (
    <div className="card" style={{ margin: "5px" }}>
      <Link className="navLink" to={`/product-details/${props.id}`}>
        <img className="card-img-top" src={props.image} alt={props.title} />
      </Link>
      <div className="card-body products">
        <Link className="navLink" to={`/product-details/${props.id}`}>
          <h5 className="card-title" title={props.title}>{props.title}</h5>
        </Link>
        <p className="card-text prd-cost">Rs. {props.price}/-</p>
         <AddToCartButton
          isAdded={getPrdInCart(props.id)}
          handleAddCart={handleAddCart}
          productInfo={props}
        />  
      </div>
    </div>
  );
};

export default Product;
