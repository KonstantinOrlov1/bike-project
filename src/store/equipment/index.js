import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    selectHelmet: (state, action) => {
      if (!state[action.payload]?.selectHelmet) {
        state[action.payload] = {
          ...state[action.payload],
          selectHelmet: true,
        };
      } else {
        state[action.payload] = {
          ...state[action.payload],
          selectHelmet: false,
        };
      }
    },
    selectTorch: (state, action) => {
      if (!state[action.payload]?.selectTorch) {
        state[action.payload] = {
          ...state[action.payload],
          selectTorch: true,
        };
      } else {
        state[action.payload] = {
          ...state[action.payload],
          selectTorch: false,
        };
      }
    },
    selectLock: (state, action) => {
      if (!state[action.payload]?.selectLock) {
        state[action.payload] = {
          ...state[action.payload],
          selectLock: true,
        };
      } else {
        state[action.payload] = {
          ...state[action.payload],
          selectLock: false,
        };
      }
    },
  },
});
