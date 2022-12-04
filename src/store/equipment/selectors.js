export const selectEquipmentModule = (state) => state.equipment;

export const selectEquipmentDops = (state, bikeId) =>
  selectEquipmentModule(state)[bikeId];
