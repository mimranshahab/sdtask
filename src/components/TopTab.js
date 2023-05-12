import React from "react";
import "../css/my-projects-overview.css";

function TopTab() {

return(
    <div className="my-projects-overview-top-tab">
          <button className="my-projects-overview-buttons">
            <button className="my-projects-overview-button1">
              <img
                src="../playground_assets/addi158-4o4t.svg"
                alt="AddI158"
                className="my-projects-overview-add"
              />
              <span className="my-projects-overview-text129 14Regular">
                <span>Add User</span>
              </span>
            </button>
            <button className="my-projects-overview-button2">
              <span className="my-projects-overview-text131 14Regular">
                <span>Add Target</span>
              </span>
            </button>
            <button className="my-projects-overview-button3">
              <img
                src="../playground_assets/dotsthreeoutlinevertical2i158-fn3f.svg"
                alt="DotsThreeOutlineVertical2I158"
                className="my-projects-overview-dots-three-outline-vertical2"
              />
            </button>
          </button>
          <div className="my-projects-overview-tab1 my-projects-overview-tab1">
            <div className="my-projects-overview-tab11">
              <span className="my-projects-overview-text133 14Semibold">
                <span>Overview</span>
              </span>
              <img
                src="../playground_assets/line230i158-d04q.svg"
                alt="Line230I158"
                className="my-projects-overview-line230"
              />
            </div>
            <div className="my-projects-overview-tab21">
              <span className="my-projects-overview-text135 14Regular">
                <span>Targets</span>
              </span>
            </div>
            <div className="my-projects-overview-tab3">
              <span className="my-projects-overview-text137 14Regular">
                <span>Budget</span>
              </span>
            </div>
            <div className="my-projects-overview-tab4">
              <span className="my-projects-overview-text139 14Regular">
                <span>Users</span>
              </span>
            </div>
            <div className="my-projects-overview-tab5">
              <span className="my-projects-overview-text141 14Regular">
                <span>Files</span>
              </span>
            </div>
            <div className="my-projects-overview-tab6">
              <span className="my-projects-overview-text143 14Regular">
                <span>Activity</span>
              </span>
            </div>
            {/* <div className="my-projects-overview-tab7">
              <span className="my-projects-overview-text145 14Regular">
                <span>Settings</span>
              </span>
            </div> */}
          </div>
        </div>
)}

export default TopTab;