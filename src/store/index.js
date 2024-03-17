// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./slices/productSlices";
import productInfoSlice from "./slices/productInfoSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from './slices/favorite';

const store = configureStore({
  reducer: {
    product: productSlices,
    productinfo:productInfoSlice,
    cart:cartSlice,
    like:favoriteSlice
    
  },
});

export default store;
