import { bikesSlice } from "..";
import { selectBikesByBiketypeId } from "../../select/selectors";
import { normolize } from "../../utils/normolize";
import { selectBikesIds } from "../selectors";

export const loadBikesIfNotExist = (biketypeid) => (dispatch, getState) => {
  const biketypeBikesIds = selectBikesByBiketypeId(getState(), {
    biketypeid,
  });

  const loadedBikesIds = selectBikesIds(getState()) || [];

  if (
    biketypeBikesIds?.every((restaurantDishId) =>
      loadedBikesIds.includes(restaurantDishId)
    )
  ) {
    return;
  }

  dispatch(bikesSlice.actions.startLoading());

  fetch(`http://localhost:3003/api/bikes?id=${biketypeid}`)
    .then((response) => response.json())
    .then((bikes) => {
      dispatch(bikesSlice.actions.successLoading(normolize(bikes)));
    })
    .catch(() => {
      console.log("error");
      dispatch(bikesSlice.actions.failLoading());
    });
};
