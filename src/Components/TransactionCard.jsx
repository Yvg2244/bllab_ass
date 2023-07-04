import React from "react";
import { AiOutlineTransaction } from "react-icons/ai";
import { useSelector } from "react-redux";
const TransactionCard = () => {
  const { addressData } = useSelector((state) => state.updateDataReducer);
  const transactionsData = addressData.addressTransactions;
  return (
    <div className="flex flex-col w-[90vw] min-h-[20rem]  rounded-md text-[#FFFFFF] gap-2">
      <div className="flex w-full items-center gap-5 border-b-[1px] border-b-[#FFFFFD] pb-2 pt-5 px-5">
        {" "}
        <h2 className="text-[2.5rem] font-bold">Transactions</h2>
        <div className="bg-primary_gray rounded-full p-3">
          <AiOutlineTransaction className="text-[1.75rem] text-primary_green " />
        </div>
      </div>
      {transactionsData == null || transactionsData.length == 0 ? (
        <div className="flex mt-2 text-[1.5rem] px-5 gap-2">
          No transaction found.
        </div>
      ) : (
        <div className="flex mt-2 text-[1.5rem] px-5 font-semibold gap-2">
          {transactionsData.map((item) => {
            return (
              <div className="flex flex-col w-[90vw] h-auto py-4 bg-primary_gray  rounded-md text-[#FFFFFF] gap-2">
                <span className="text-primary_green px-5 font-semibold">
                  Index :{" "}
                  <span className="px-2 text-[#FFFFFF]">{item.tx_index}</span>
                </span>
                <span className="text-primary_green px-5 font-semibold">
                  Height :{" "}
                  <span className="px-2 text-[#FFFFFF]">
                    {item.block_height}
                  </span>
                </span>
                <span className="text-primary_green px-5 font-semibold">
                  Time :{" "}
                  <span className="px-2 text-[#FFFFFF]">{item.block_time}</span>
                </span>
                <span className="text-primary_green font-semibold px-5">
                  Hash Address :{" "}
                </span>{" "}
                <span className="w-[80%] px-5 overflow-ellipsis overflow-hidden ">
                  {item.tx_hash}{" "}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
