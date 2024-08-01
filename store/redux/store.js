import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

const store = configureStore({
  //different slices of data and actions are reducers
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export default store;
