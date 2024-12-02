import React from "react";
import "./Navbar.css";
import menu_icon from "../Assets/menu.png";
import logo from "../Assets/logo.png";
import search_icon from "../Assets/search.png";
import upload_icon from "../Assets/upload.png";
import more_icon from "../Assets/more.png";
import notification_icon from "../Assets/notification.png";
import profile_icon from "../Assets/jack.png";

const Navbar = ({sideSection}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="menu" onClick={sideSection} />
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-middle flex-div">
        <input type="text" placeholder="Search" />
        <img src={search_icon} className="search_icon" alt="" />
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
