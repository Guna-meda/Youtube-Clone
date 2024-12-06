import React from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar.jsx";
import View from "../Components/View.jsx";

const Home = ({ isSideBarOpen }) => {
  return (
    <div className="home-container">
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <div className={`container ${isSideBarOpen ? "" : "large-container"}`}>
        <View></View>
      </div>
    </div>
  );
};

export default Home;
