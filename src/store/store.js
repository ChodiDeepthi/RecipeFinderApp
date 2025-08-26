import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    recipes: searchSlice,
  },
});

export default store;
