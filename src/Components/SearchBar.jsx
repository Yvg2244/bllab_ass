"use client";
import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const SearchBar = () => {
  const dispatch = useDispatch();
  const { address, loader } = useSelector((state) => state.updateReducer);
  const handleAddress = () => {
    dispatch({
      type: "updateLoader",
      payload: true,
    });
    axios
      .get(
        `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}`,
        {
          headers: {
            project_id: "mainnetKUIQg7ExMWzcLjG4uY2Cjz8b0ktH80DI",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "updateAddressData",
          payload: res.data,
        });
        dispatch({
          type: "updateLoader",
          payload: false,
        });
      })
      .catch((err) =>
        dispatch({
          type: "updateLoader",
          payload: false,
        }),
        dispatch({
          type: "updateAddressData",
          payload: null,
        })
      );
    axios
      .get(
        `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/transactions`,
        {
          headers: {
            project_id: "mainnetKUIQg7ExMWzcLjG4uY2Cjz8b0ktH80DI",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: " updateAddressTransactions",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${address}/utxos`,
        {
          headers: {
            project_id: "mainnetKUIQg7ExMWzcLjG4uY2Cjz8b0ktH80DI",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "updateAddressUtxo",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full p-5 gap-5 bg-primary_black flex flex-col items-center">
      <input
        type="text"
        className="w-full p-2 border-[1px] border-[#FFFFFF] bg-secoundry_black text-[#FFFFFF]  rounded-md "
        label="Address"
        onChange={(e) => {
          dispatch({
            type: "updateAddress",
            payload: e.target.value,
          });
        }}
      />
      <button
        onClick={handleAddress}
        className="flex bg-primary_green py-2 text-black font-bold rounded-md px-8 items-center gap-3"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
