import { useState } from "react";
import {useDispatch} from "react-redux"
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import DisplaySection from "./Components/DisplaySection";

function App() {
  const dispatch=useDispatch();
 
  return (
    <div className="bg-primary_black min-h-[100vh]">
      <Header />
      <SearchBar />
      <DisplaySection/>
    </div>
  );
}

export default App;
