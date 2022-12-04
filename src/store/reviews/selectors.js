import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectReviewsModule = (state) => state.reviews;

export const selectReviewsIds = (state) => selectReviewsModule(state).ids;

export const selectReviewsIdsById = (state) =>
  selectReviewsIds(state).map((id) => selectReviewsModule(state).entities[id]);

export const selectReviewsIsLoading = (state) =>
  selectReviewsModule(state).status === LoadingStatuses.inProgress;
