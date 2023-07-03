import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  address: null,
  addressData: null,
};
export const updateAdressReducer = createReducer(initialState, {
  updateAddress: (state, action) => {
    state.address = action.payload;
  },
  updateAddressData: (state, action) => {
    state.addressData = action.payload;
  },
});
