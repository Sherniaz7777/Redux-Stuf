// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import productSlices from "./slices/productSlices";

const store = configureStore({
  reducer: {
    product: productSlices,
  },
});

export default store;
