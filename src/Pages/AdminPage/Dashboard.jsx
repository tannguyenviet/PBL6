import React from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

function Dashboard({ children }) {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard__container">
        <TopBar />
        <div className="dashboard__content">
          {children}
          This is dashboard ABCXYZ
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
