import { useState } from "react";
import {useDispatch} from "react-redux"
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import DisplaySection from "./Components/DisplaySection";

function App() {
  const dispatch=useDispatch();
 
  return (
    <div className="">
      <Header />
      <SearchBar />
      <DisplaySection/>
    </div>
  );
}

export default App;
