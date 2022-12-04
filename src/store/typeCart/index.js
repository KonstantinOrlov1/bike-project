import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const typyCartSlice = createSlice({
  name: "typecart",
  initialState,
  reducers: {
    selectDay: (state, action) => {
      state[action.payload] = "day";
    },
    selectHour: (state, action) => {
      state[action.payload] = "hour";
    },
  },
});
