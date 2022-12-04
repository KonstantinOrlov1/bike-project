import { LoadingStatuses } from "../constants/loadingStatuses";

export const selectSelectsModule = (state) => state.select;

export const selectSelectsIds = (state) => selectSelectsModule(state).ids;

export const selectSelectsIdsById = (state) =>
  selectSelectsIds(state).map((id) => selectSelectsModule(state).entities[id]);

export const selectSelectsIsLoading = (state) =>
  selectSelectsModule(state).status === LoadingStatuses.inProgress;

export const selectBiketypeById = (state, { biketypeid }) =>
  selectSelectsModule(state).entities[biketypeid];

export const selectBikesByBiketypeId = (state, { biketypeid }) =>
  selectBiketypeById(state, { biketypeid })?.bikes;
