import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from "../products.json";
import { fetchProducts, STATUSES } from "../redux/slices/productSlice";
import Product from "../Components/Product";

const Home = (props) => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  const products = data;
  console.log('props are', props);
  let category = props.params ? props.params.category.toLowerCase() : null
  if(category) {
    category = category.replace("-", " ");
  }
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.PENDING) {
    return <h2>Loading please wait....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="container-fluid">
      <div className="products">
        <div class="row home-prdcts">
          {products.map((product, index) => {
            if(!category) {
              return (
                <div class="col-md-2" key={product.id}>
                  <Product params={{ 'products': { ...product }, category }} />
                </div>
              );
            } else {
              if (product.category === category) {
                return (
                  <div class="col-md-2" key={product.id}>
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
