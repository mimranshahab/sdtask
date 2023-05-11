import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import RightBar from "./components/RightBar";

function App() {
  return (
    <div className="my-projects-overview-container">
      <div className="my-projects-overview-my-projects-overview">
        <Drawer isOpen={true} />
        <Header />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
