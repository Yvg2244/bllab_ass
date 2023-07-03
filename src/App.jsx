import { useState } from "react";
import {useDispatch} from "react-redux"
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";

function App() {
  const dispatch=useDispatch();
 
  return (
    <div className="">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
