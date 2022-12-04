import { reviewsSlice } from "..";
import { normolize } from "../../utils/normolize";
import { selectReviewsIds } from "../selectors";

export const loadReviewsIfNotExist = (dispatch, getState) => {
  if (selectReviewsIds(getState())?.length > 0) {
    return;
  }

  dispatch(reviewsSlice.actions.startLoading());

  fetch("http://localhost:3003/api/reviews")
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(reviewsSlice.actions.successLoading(normolize(reviews)));
    })
    .catch(() => {
      console.log("error");
      dispatch(reviewsSlice.actions.failLoading());
    });
};
