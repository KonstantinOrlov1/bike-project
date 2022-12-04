import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { LoadingStatuses } from "../constants/loadingStatuses";

const initialState = {
  entities: {},
  ids: [],
  status: LoadingStatuses.idle,
};

export const bikesSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = LoadingStatuses.inProgress;
    },
    failLoading: (state) => {
      state.status = LoadingStatuses.failed;
    },
    successLoading: (state, action) => {
      state.entities = {
        ...state.entities,
        ...action.payload.entities,
      };
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
      state.status = LoadingStatuses.success;
    },
  },
});
