import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { selectSlice } from "./select";
import { bikesSlice } from "./bikes";
import { cartSlice } from "./cart";
import { typyCartSlice } from "./typeCart";
import { equipmentSlice } from "./equipment";
import { reviewsSlice } from "./reviews";

const rootReducer = combineReducers({
  select: selectSlice.reducer,
  bikes: bikesSlice.reducer,
  cart: cartSlice.reducer,
  typecart: typyCartSlice.reducer,
  equipment: equipmentSlice.reducer,
  reviews: reviewsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
