import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  PENDING: "pending",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
    productInfo: {},
    inCart:false
  },
  reducers: {
    //   setProducts: (state, action) => {
    //     state.data = action.payload;
    //   },
    //   setStatus: (state, action) => {
    //     state.status = STATUSES.IDLE
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.PENDING;
        state.inCart = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.productInfo = {};
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.productInfo = {};
        state.status = STATUSES.ERROR;
      })
      .addCase(fetchAProduct.pending, (state, action) => {
        state.productInfo = {};
        state.data = [];
        state.inCart = false;
        state.status = STATUSES.PENDING;
      })
      .addCase(fetchAProduct.fulfilled, (state, action) => {
        state.productInfo = action.payload;
        state.data = [];
        state.status = STATUSES.IDLE;
        state.inCart = true;
      })
      .addCase(fetchAProduct.rejected, (state, action) => {
        state.data = [];
        state.status = STATUSES.ERROR;
        state.inCart = false;
        state.productInfo={};
      })
      .addCase(productSortByPrice.pending, (state, action) => {
        state.data = [];
        state.productInfo = {};
        state.status = STATUSES.PENDING;
      })
      .addCase(productSortByPrice.fulfilled, (state, action) => {
        state.data = action.payload;
        state.productInfo = {};
        state.status = STATUSES.IDLE;
      })
      .addCase(productSortByPrice.rejected, (state, action) => {
        state.data = [];
        state.productInfo = {};
        state.status = STATUSES.ERROR;
      });
      ;

  },
}); 

console.log("product actions are:", productSlice);

// export const {setStatus, setProducts} = productSlice.actions // we will use this if we want to use methods in reducer

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

export const fetchAProduct = createAsyncThunk(
  "fetch/product",
  async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    return data;
  }
);

export const productSortByPrice = createAsyncThunk("products/sortbyprice", async (products) => { 
  return products;
});

//if you want to use the reducer then uncomment the below and also comment the above

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     };
// }
