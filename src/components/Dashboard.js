import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import TopTab from "./TopTab";
import RightBar from "./RightBar";
import Block from "./Block";

import "../css/my-projects-overview.css";

function Dashboard() {
  return (
    <div className="my-projects-overview-container">
      <div className="my-projects-overview-my-projects-overview">
        <Drawer isOpen={true} />
        <Header />
        <RightBar />
        <TopTab />
        <Block />
      </div>
    </div>
  );
}

export default Dashboard;
