import React from "react";
import { useNavigate } from 'react-router-dom';
import "../css/my-projects-overview.css";

function Drawer({ isOpen }) {  

  const navigate = useNavigate();

  function handleClick() {
    navigate('/calculator');
  }

  return (
    <div
      className="my-projects-overview-sidebar-a"
      style={{ left: isOpen ? 0 : -300, cursor:"pointer" }}
    >
      <div className="my-projects-overview-avatar-name">
        <div className="my-projects-overview-bye-wind"></div>
        <span className="my-projects-overview-text 14Regular">
          <span>ByeWind</span>
        </span>
      </div>
      <div className="my-projects-overview-nav">
        <div className="my-projects-overview-favorites">
          <div className="my-projects-overview-tab">
            <div>
              <span className="my-projects-overview-text002 14Regular">
                <span>Favorites</span>
              </span>
            </div>
            <div className="my-projects-overview-tab2">
              <span className="my-projects-overview-text004 14Regular">
                <span>Recently</span>
              </span>
            </div>
          </div>
          <div className="my-projects-overview-container1">
            <div className="my-projects-overview-frame-sidebar-item">
              <img
                src="../playground_assets/dot2i158-ht3t.svg"
                alt="Dot2I158"
                className="my-projects-overview-dot2"
              />
              <span className="my-projects-overview-text006 14Regular">
                <span>Overview</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item01">
              <img
                src="../playground_assets/dot2i158-vo1t.svg"
                alt="Dot2I158"
                className="my-projects-overview-dot21"
              />
              <span className="my-projects-overview-text008 14Regular" onClick={handleClick}>
                <span>Calculator</span>
              </span>
            </div>
          </div>
        </div>
        <div className="my-projects-overview-dashboards">
          <div className="my-projects-overview-title">
            <span className="my-projects-overview-text010 14Regular">
              <span>Dashboards</span>
            </span>
          </div>
          <div className="my-projects-overview-container2">
            <div className="my-projects-overview-frame-sidebar-item02">
              <img
                src="../playground_assets/arrowlineright2i158-6dx.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right2"
              />
              <img
                src="../playground_assets/chartpieslicei158-ml2.svg"
                alt="ChartPieSliceI158"
                className="my-projects-overview-chart-pie-slice"
              />
              <span className="my-projects-overview-text012 14Regular">
                <span>Default</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item03">
              <img
                src="../playground_assets/arrowlineright2i158-sj55.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right21"
              />
              <img
                src="../playground_assets/shoppingbagopeni158-g8pg.svg"
                alt="ShoppingBagOpenI158"
                className="my-projects-overview-shopping-bag-open"
              />
              <span className="my-projects-overview-text014 14Regular">
                <span>eCommerce</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item04">
              <img
                src="../playground_assets/arrowlineright2i158-w8im.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right22"
              />
              <img
                src="../playground_assets/foldernotchi158-6555.svg"
                alt="FolderNotchI158"
                className="my-projects-overview-folder-notch"
              />
              <span className="my-projects-overview-text016 14Regular">
                <span>Projects</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item05">
              <img
                src="../playground_assets/arrowlineright2i158-ylaq.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right23"
              />
              <img
                src="../playground_assets/bookopeni158-884p.svg"
                alt="BookOpenI158"
                className="my-projects-overview-book-open"
              />
              <span className="my-projects-overview-text018 14Regular">
                <span>Online Courses</span>
              </span>
            </div>
          </div>
        </div>
        <div className="my-projects-overview-pages">
          <div className="my-projects-overview-title1">
            <span className="my-projects-overview-text020 14Regular">
              <span>Pages</span>
            </span>
          </div>
          <div className="my-projects-overview-container3">
            <div className="my-projects-overview-frame-sidebar-item06">
              <img
                src="../playground_assets/arrowlinedown2i158-st06.svg"
                alt="ArrowLineDown2I158"
                className="my-projects-overview-arrow-line-down2"
              />
              <img
                src="../playground_assets/identificationbadgei158-6p6z.svg"
                alt="IdentificationBadgeI158"
                className="my-projects-overview-identification-badge"
              />
              <span className="my-projects-overview-text022 14Regular">
                <span>User Profile</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item07">
              <span className="my-projects-overview-text024 14Regular">
                <span>Overview</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item08">
              <img
                src="../playground_assets/rectangle1i158-n5gv-200w.png"
                alt="Rectangle1I158"
                className="my-projects-overview-rectangle1"
              />
              <span className="my-projects-overview-text026 14Regular">
                <span>Projects</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item09">
              <span className="my-projects-overview-text028 14Regular">
                <span>Campaigns</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item10">
              <span className="my-projects-overview-text030 14Regular">
                <span>Documents</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item11">
              <span className="my-projects-overview-text032 14Regular">
                <span>Followers</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item12">
              <img
                src="../playground_assets/arrowlineright2i158-e28i.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right24"
              />
              <img
                src="../playground_assets/identificationcardi158-or79p.svg"
                alt="IdentificationCardI158"
                className="my-projects-overview-identification-card"
              />
              <span className="my-projects-overview-text034 14Regular">
                <span>Account</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item13">
              <img
                src="../playground_assets/arrowlineright2i158-xxeo.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right25"
              />
              <img
                src="../playground_assets/usersthreei158-xzm.svg"
                alt="UsersThreeI158"
                className="my-projects-overview-users-three"
              />
              <span className="my-projects-overview-text036 14Regular">
                <span>Corporate</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item14">
              <img
                src="../playground_assets/arrowlineright2i158-pwni.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right26"
              />
              <img
                src="../playground_assets/notebooki158-5z0i.svg"
                alt="NotebookI158"
                className="my-projects-overview-notebook"
              />
              <span className="my-projects-overview-text038 14Regular">
                <span>Blog</span>
              </span>
            </div>
            <div className="my-projects-overview-frame-sidebar-item15">
              <img
                src="../playground_assets/arrowlineright2i158-iwzk.svg"
                alt="ArrowLineRight2I158"
                className="my-projects-overview-arrow-line-right27"
              />
              <img
                src="../playground_assets/chatsteardropi158-z0ad.svg"
                alt="ChatsTeardropI158"
                className="my-projects-overview-chats-teardrop"
              />
              <span className="my-projects-overview-text040 14Regular">
                <span>Social</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-projects-overview-logo">
        <div className="my-projects-overview-logo1">
          <div className="my-projects-overview-snow-logo">
            <img
              src="../playground_assets/snowiconi158-5m9f.svg"
              alt="SnowIconI158"
              className="my-projects-overview-snow-icon"
            />
            <img
              src="../playground_assets/snowlogoi158-aezh.svg"
              alt="SnowLogoI158"
              className="my-projects-overview-snow-logo1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
