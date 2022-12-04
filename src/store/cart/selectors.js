export const selectCartModule = (state) => state.cart;

export const selectCartBikeCount = (state, bikeid) =>
  selectCartModule(state)?.[bikeid] || false;

export const selectCartBikeIds = (state) =>
  Object.keys(selectCartModule(state));
