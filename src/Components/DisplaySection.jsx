import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplaySection = () => {
  // const { address } = useSelector((state) => state.updateReducer);
  const { addressData } = useSelector((state) => state.updateDataReducer);

  return (
    <div>
      {addressData == null ? <p>No transactions found</p> : <p>Data</p>}
    </div>
  );
};

export default DisplaySection;
