import React, { useState, useEffect } from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CheckProductAdded } from "../Utils/CartBL";
import { useSelector } from "react-redux";

import AddToCartButton from "../Components/AddToCartButton";

const Product = (properties) => {
  // console.log(props)
  const props = properties.params.products;
  const category = properties.params.category;
  console.log('category:', category)
  const items = useSelector((state) => state.cart);
  console.log("items are:", items);

  const [isAdded, setIsAdded] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {}, [items]);

  useEffect(() => {}, [isAdded]);

  const handleAddCart = (prdObj) => {
    dispatch(addItem(prdObj));
    let inCart = CheckProductAdded(prdObj.id.toString(), items);
    if (!inCart) {
      setIsAdded((prev) => [...prev, { id: prdObj.id }]);
    }
  };

  const getPrdInCart = (prdid) => {
    let obj = { id: prdid, inCart: false };

    items.map((prd) => {
      if (prd.id === prdid) {
        obj.inCart = true;
      }
    });
    return obj;
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
        {/* <button
          onClick={(e) =>
            handleAddCart({
              name: props.title,
              price: props.price,
              quantityPrice: props.price,
              image: props.image,
              id: props.id,
              count: 1,
            })
          }
          className="btn btn-primary"
        >
          Add to cart
        </button> */}
      </div>
    </div>
  );
};

export default Product;
