import React from "react";
import "../css/my-projects-overview.css";

function Header() {
  return (
    <div className="my-projects-overview-header-a">
        hello abc 123
      <button className="my-projects-overview-icon-button">
        <button className="my-projects-overview-button">
          <img
            src="../playground_assets/suni158-aj49.svg"
            alt="SunI158"
            className="my-projects-overview-sun"
          />
        </button>
        <button className="my-projects-overview-button01">
          <img
            src="../playground_assets/clockcounterclockwisei158-3dl.svg"
            alt="ClockCounterClockwiseI158"
            className="my-projects-overview-clock-counter-clockwise"
          />
        </button>
        <button className="my-projects-overview-button02">
          <img
            src="../playground_assets/belli158-cbpb.svg"
            alt="BellI158"
            className="my-projects-overview-bell"
          />
        </button>
        <button className="my-projects-overview-button03">
          <img
            src="../playground_assets/sidebari158-8bg9.svg"
            alt="SidebarI158"
            className="my-projects-overview-sidebar"
          />
        </button>
      </button>
      <div className="my-projects-overview-search">
        <img
          src="../playground_assets/searchi158-dvgl.svg"
          alt="SearchI158"
          className="my-projects-overview-search1"
        />
        <span className="my-projects-overview-text042 14Regular">
          <span>Search</span>
        </span>
        <div className="my-projects-overview-shortcut">
          <span className="my-projects-overview-text044 12Regular">
            <span>⌘/</span>
          </span>
        </div>
      </div>
      <div className="my-projects-overview-icon-breadcrumb">
        <button className="my-projects-overview-button04">
          <img
            src="../playground_assets/sidebari158-c2ti.svg"
            alt="SidebarI158"
            className="my-projects-overview-sidebar1"
          />
        </button>
        <button className="my-projects-overview-button05">
          <img
            src="../playground_assets/stari158-99ld.svg"
            alt="StarI158"
            className="my-projects-overview-star"
          />
        </button>
        <div className="my-projects-overview-breadcrumb">
          <button className="my-projects-overview-button06">
            <span className="my-projects-overview-text046 14Regular">
              <span>Dashboards</span>
            </span>
          </button>
          <span className="my-projects-overview-text048 14Regular">/</span>
          <button className="my-projects-overview-button07">
            <span className="my-projects-overview-text049 14Regular">
              <span>Default</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
