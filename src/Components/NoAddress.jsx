import React from "react";
import { useSelector } from "react-redux";
import Loader from "../assests/loader.svg"
const NoAddress = () => {
  const { loader } = useSelector((state) => state.updateReducer);

  return <>
  {loader?<div className="w-[100vw] flex justify-center "><img className="h-[5rem] w-[5rem]" src={Loader}/></div>:<div className="w-[100vw]  p-5 flex flex-col justify-start text-center bg-primary_black text-[#FFFFFF] tracking-wide h-auto text-xl">
      <p>No Details Found </p>
      <p className="text-sm">Please check the address entered</p>
    </div>}
  </>;
};

export default NoAddress;
