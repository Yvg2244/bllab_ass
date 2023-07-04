import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  address: null,
  addressData: null,
  addressTransactions:null,
  addressUtxo:null
};
export const updateAdressReducer = createReducer(initialState, {
  updateAddress: (state, action) => {
    state.address = action.payload;
  },
  updateAddressData: (state, action) => {
    state.addressData = action.payload;
  },
  updateAddressTransactions: (state, action) => {
    state.addressTransactions = action.payload;
  },
  updateAddressUtxo: (state, action) => {
    state.addressUtxo = action.payload;
  },
});
