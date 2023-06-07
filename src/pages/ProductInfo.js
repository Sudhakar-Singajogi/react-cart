import React, { useState, useEffect } from "react";
import { fetchAProduct } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/slices/cartSlice";
import { getItemsSelector } from "../redux/slices/cartSlice";
import { CheckProductAdded } from "../Utils/CartBL";

import AddToCartButton from "../Components/AddToCartButton";

function ProductInfo() {
  const items = useSelector(getItemsSelector);
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const { product } = useSelector((state) => state);
  const { productInfo, status } = product;
  const [isAdded, setIsAdded] = useState({id:productId, inCart:false});
  
  useEffect(() => {
    dispatch(fetchAProduct(productId));
  }, []);

  const handleAddCart = (productObj) => {
    dispatch(addItem(productObj));
  };

  useEffect(() => {
    let incart = CheckProductAdded(productId, items)
    if(incart) {
      setIsAdded({id:productId, inCart:true});
    }
  }, [items]);

  return (
    <div>
      <h5 style={{ marginTop: "10px" }}>ProductInfo</h5>

      <div
        className="card"
        style={{ width: "35rem", height: "35rem", margin: "10px" }}
      >
        <img
          className="card-img-top"
          src={productInfo.image}
          alt={productInfo.title}
          style={{ width: "22rem", height: "22rem", margin: "10px" }}
        />
        <div className="card-body productInfo">
          <h5 className="card-title">{productInfo.title}</h5>
          <p className="card-text">Rs. {productInfo.price}/-</p>
           
          <AddToCartButton
            isAdded={isAdded}
            handleAddCart={handleAddCart}
            productInfo={productInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
