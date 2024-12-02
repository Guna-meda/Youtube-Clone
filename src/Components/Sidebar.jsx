import React from "react";
import "./Sidebar.css";
import home from "../../src/Assets/home.png";
import game_icon from "../../src/Assets/game_icon.png";
import automobiles from "../../src/Assets/automobiles.png";
import sports from "../../src/Assets/sports.png";
import entertainment from "../../src/Assets/entertainment.png";
import tech from "../../src/Assets/tech.png";
import music from "../../src/Assets/music.png";
import blogs from "../../src/Assets/blogs.png";
import news from "../../src/Assets/news.png";
import jack from "../../src/Assets/jack.png";
import simon from "../../src/Assets/simon.png";
import tom from "../../src/Assets/tom.png";
import megan from "../../src/Assets/megan.png";
import cameron from "../../src/Assets/cameron.png";

const Sidebar = ({ isSideBarOpen }) => {
  const sideBarLinks = [
    { icon: home, name: "Home" },
    { icon: game_icon, name: "Gaming" },
    { icon: automobiles, name: "Automobiles" },
    { icon: sports, name: "Sports" },
    { icon: entertainment, name: "Entertainment" },
    { icon: tech, name: "Technology" },
    { icon: music, name: "Music" },
    { icon: blogs, name: "Blogs" },
    { icon: news, name: "News" },
  ];

  const subscribers = [
    { icon: jack, name: "PewDiePie" },
    { icon: simon, name: "MrBeast" },
    { icon: tom, name: "Justin Bieber" },
    { icon: megan, name: "5-Minute Crafts" },
    { icon: cameron, name: "Nas Daily" },
  ];

  return (
    <div className={`sidebar ${isSideBarOpen ? "Open" : "Closed"}`}>
      <div className="sortcut-links">
        {sideBarLinks.map((item, index) => (
          <div key={index} className="side-link">
            <img src={item.icon} alt={item.name} />
            {isSideBarOpen && <p>{item.name}</p>}
          </div>
        ))}
      </div>

      {isSideBarOpen && <div className="divider"></div>}

      <div className="subscribed-list">
        {isSideBarOpen && <h3>Subscribed</h3>}
        {subscribers.map((item, index) => (
          <div key={index} className="side-link">
            <img src={item.icon} alt={item.name} />
            {isSideBarOpen && <p>{item.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
