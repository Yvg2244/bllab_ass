import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoAddress from "./NoAddress";
import AdressDataDisplay from "./AdressDataDisplay";

const DisplaySection = () => {
  // const { address } = useSelector((state) => state.updateReducer);
  const { addressData } = useSelector((state) => state.updateDataReducer);

  return (
    <div className="text-white w-full justify-center">
      {addressData == null ? <NoAddress/> : <AdressDataDisplay/>}
    </div>
  );
};

export default DisplaySection;
