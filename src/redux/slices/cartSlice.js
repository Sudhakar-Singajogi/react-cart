import { createSlice, createSelector } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [], 
  reducers: {
    addItem: (state, action) => {
      
      const isFound = state.some(element => {
        if (action.payload.id === element.id) {
          return true;
        }      
        return false;
      });

      if(!isFound) 
        state.push(action.payload);

        return state; 
       
    },
    removeItem: (state, action) => {
      return state.filter((prd) => prd.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const updatedCart = [];
      state.map((prd) => {
        if (action.payload.id === prd.id) {
          let price = prd.quantityPrice + prd.price;

          updatedCart.push({
            ...prd,
            count: prd.count + 1,
            quantityPrice: price,
          });
        } else {
          updatedCart.push({ ...prd });
        }
      });
      state = [...updatedCart];
      return state;
    },
    decreaseQuantity: (state, action) => {
      const updatedCart = [];
      state.map((prd) => {
        if (action.payload.id == prd.id) {
          if (prd.count > 1) {
            let price = prd.quantityPrice - prd.price;
            updatedCart.push({
              ...prd,
              count: prd.count - 1,
              quantityPrice: price,
            });
          }
        } else {
          updatedCart.push({ ...prd });
        }
      });
      state = [...updatedCart];
      return state;
    },
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
