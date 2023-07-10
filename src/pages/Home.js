import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from "../products.json";
import { fetchProducts, STATUSES, productSortByPrice } from "../redux/slices/productSlice";
import Product from "../Components/Product";
import CartItems from "../Components/CartItems";

const Home = (props) => {
  const dispatch = useDispatch(); 
  const { data, status } = useSelector((state) => state.product);
  const cartItems = CartItems(); 
  
  const products = data;
  
  
  let category = props.params ? props.params.category.toLowerCase() : null
  if(category) {
    category = category.replace("-", " ");
  }
  useEffect(() => {
    dispatch(fetchProducts()); 
    console.log('products are: ', products);
  }, []); 

  const filterByPrice = (order) => {
    if(order === 'DESC') {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      dispatch(productSortByPrice(sortedProducts));
    } else if(order === 'ASC') {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      dispatch(productSortByPrice(sortedProducts));
    }
  }

  if (status === STATUSES.PENDING) {
    return <h2>Loading please wait....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="">
      <div style={{display:"grid", cursor:"pointer"}}>
        <span onClick={() => filterByPrice('ASC')}>Low to High</span>
        <span onClick={() => filterByPrice('DESC')}>High to Low</span>
      </div>
      <div className="products">
        <div className="row home-prdcts">
          {
            products.map((product, index) => {
            if(!category) {
              return (
                <div className="col-md-2" key={product.id}>
                  <Product params={{ 'products': { ...product }, category, 'cartItems': cartItems }} />
                </div>
              );
            } else {
              if (product.category === category) {
                return (
                  <div className="col-md-2" key={product.id}>
                    <Product params={{ 'products': { ...product }, category }} />
                  </div>
                );
              }
              return null;

          
            }
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
