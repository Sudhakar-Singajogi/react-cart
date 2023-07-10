import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import cartReducer from "./slices/cartSlice";
// import productReducer from "./slices/productSlice"

import productReducer, {
  fetchAProduct,
  fetchProducts,
  productSortByPrice,
} from "./slices/productSlice";
import cartReducer, {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./slices/cartSlice";

const rootReducer = combineReducers(
  {
    cart:cartReducer,
    product: productReducer
  }
  
)

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     product: productReducer,
//   },
//   devTools: true,
// });



export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});