import React from "react";
import {
  FiLayout,
  FiClock,
  FiCalendar,
  FiList,
  FiBarChart2,
  FiMessageCircle,
  FiPhone,
  FiSettings,
} from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span style={{ color: "skyblue" }}>Health</span>
        <span style={{ color: "black" }}>care.</span>
      </div>

      {/* Navigation section */}
      <div className="nav-sections">
        <nav>
          <ul className="nav-list">
            <h4>General</h4>
            <li><FiLayout /> <span><b>Dashboard</b></span></li>
            <li><FiClock /> <span>History</span></li>
            <li><FiCalendar /> <span>Calendar</span></li>
            <li><FiList /> <span>Appointments</span></li>
            <li><FiBarChart2 /> <span>Statistics</span></li>
          </ul>

          <ul className="nav-list">
            <h4>Tools</h4>
            <li><FiMessageCircle /> <span>Chat</span></li>
            <li><FiPhone /> <span>Support</span></li>
          </ul>
        </nav>
      </div>

      {/* Settings fixed at bottom */}
      <div className="settings-section">
        <ul className="nav-list">
          <li><FiSettings /> <span>Settings</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
