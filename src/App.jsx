import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Navbar from "./Components/Navbar";

const App = () => {

  const[isSideBarOpen , setIsSideBarOpen]=useState(true);

  const sideSection = () => {
    setIsSideBarOpen((prev)=>!prev);
  };

  return (
    <div>
      <Navbar sideSection={sideSection} />
      <Routes basename="/Youtube-Clone">
        <Route path="/" element={<Home isSideBarOpen={isSideBarOpen} />} />
        <Route path="/video/:catagoryId/:videoid" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
