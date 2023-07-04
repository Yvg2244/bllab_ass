import React from "react";
import { IoMdWallet } from "react-icons/io";
import { useSelector } from "react-redux";
const BalanceCard = () => {
  const { addressData } = useSelector((state) => state.updateDataReducer);
  console.log(addressData);
  return (
    <div className="flex flex-col w-[90vw] min-h-[20rem]   rounded-md text-[#FFFFFF] gap-2">
      <div className="flex w-full items-center gap-5 border-b-[1px] border-b-[#FFFFFD] pb-2 pt-5 px-5">
        {" "}
        <h2 className="text-[2.5rem] font-bold">Balance</h2>
        <div className="bg-primary_gray rounded-full p-3">
          <IoMdWallet className="text-[1.75rem] text-primary_green" />
        </div>
      </div>
      <div className="flex mt-2 text-[1.5rem] px-5 font-semibold gap-2">
        <span>{addressData.amount[0].quantity}</span>
        <span>{addressData.amount[0].unit}</span>
      </div>
      <span className="text-primary_green px-5 font-semibold">Type : </span>
      <span className="px-5">{addressData.type}</span>
      <span className="text-primary_green font-semibold px-5">
        Stake Address :{" "}
      </span>{" "}
      <span className="w-[80%] px-5 overflow-ellipsis overflow-hidden ">
        {addressData.stake_address}
      </span>
    </div>
  );
};

export default BalanceCard;
