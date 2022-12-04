import { selectSlice } from "..";
import { normolize } from "../../utils/normolize";
import { selectSelectsIds } from "../selectors";

export const loadSelectIfNotExist = (dispatch, getState) => {
  if (selectSelectsIds(getState())?.length > 0) {
    return;
  }

  dispatch(selectSlice.actions.startLoading());

  fetch("http://localhost:3003/api/bikeType")
    .then((response) => response.json())
    .then((selects) => {
      dispatch(selectSlice.actions.successLoading(normolize(selects)));
    })
    .catch(() => {
      console.log("error");
      dispatch(selectSlice.actions.failLoading());
    });
};
