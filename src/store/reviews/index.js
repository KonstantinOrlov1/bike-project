import { createSlice } from "@reduxjs/toolkit";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
  entities: {},
  ids: [],
  status: LoadingStatuses.idle,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LoadingStatuses.inProgress;
    },
    failLoading: (state) => {
      state.status = LoadingStatuses.failed;
    },
    successLoading: (state, action) => {
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
      state.status = LoadingStatuses.success;
    },
  },
});
