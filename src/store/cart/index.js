import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    chooseBike: (state, action) => {
      state[action.payload] = true;
    },
    cancelBike: (state, action) => {
      delete state[action.payload];
    },
    clearCart: () => {
      return {};
    },
  },
});
