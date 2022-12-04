import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectBikeModule = (state) => state.bikes;

export const selectBikesIds = (state) => selectBikeModule(state).ids;

export const selectBikeById = (state, { bikeId }) => {
  return selectBikeModule(state).entities[bikeId];
};

export const selectBikeByIdr = (state, bikeId) => {
  return selectBikeModule(state).entities[bikeId];
};

export const selectBikeLoadingStatus = (state) =>
  selectBikeModule(state).status;

export const selectIsBikeLoading = (state) =>
  selectBikeLoadingStatus(state) === LoadingStatuses.inProgress;

export const selectBikesCost = (state, arrBikes) => {
  const arrPrices = arrBikes.map(
    (bikeId) => selectBikeByIdr(state, bikeId).price
  );

  return arrPrices.reduce((sum, number) => sum + number, 0);
};
