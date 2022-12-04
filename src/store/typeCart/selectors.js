export const selecttypeCartModule = (state) => state.typecart;

export const selecttypeCartByPathname = (state) =>
  selecttypeCartModule(state)?.type || "day";
