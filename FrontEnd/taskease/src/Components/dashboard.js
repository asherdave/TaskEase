import React from "react";
import "../Css/dashboard.css";
import woman from "../Images/woman.png";
import checkbox from "../Images/check-box.png";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <div className="dashboard-search-frame">
            <img className="dashboard-icon" src={searchicon} alt="Search" />
            <div className="dashboard-text">Search</div>
          </div>
          <div className="dashboard-tips-frame">
            <img className="dashboard-icon" src={tips} alt="Tips" />
          </div>
          <div className="dashboard-heading">
            <div className="dashboard-sign-out">
              <div className="dashboard-sign-out-item">
                <div className="dashboard-sign-out-text">Sign out</div>
                <img className="dashboard-logout-icon" src="logoutIcon.png" alt="Logout" />
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-main">
          <div className="dashboard-hero">
            <div className="dashboard-overlap-group">
              <div className="dashboard-hero-rectangle" />
              <div className="dashboard-hero-name">
                <div className="dashboard-hero-text">Hello, Beautiful Human!</div>
                <p className="dashboard-hero-desc">What do you want to do today?</p>
              </div>
              <img className="dashboard-young-smiling-woman" src={woman} alt="Young smiling woman" />
            </div>
          </div>

          <div className="dashboard-today-section">
            <div className="dashboard-date-heading">
              <div className="dashboard-today-text">Today’s Tasks</div>
              <div className="dashboard-delete-and-date">
                <div className="dashboard-delete-text">Delete All</div>
                <div className="dashboard-date-text">Monday, 8 April 2024</div>
              </div>
            </div>

            <div className="dashboard-tasks-and-stat">
              <div className="dashboard-tasks">
                <div className="dashboard-task">
                  <div className="dashboard-checklist">
                    <img className="dashboard-material-symbols" src={checkbox} alt="Check box" />
                    <div className="dashboard-task-text">Buy monthly groceries</div>
                  </div>
                </div>
                <div className="dashboard-checklist-wrapper">
                  <div className="dashboard-checklist">
                    <img className="dashboard-material-symbols" src={checkbox} alt="Check box" />
                    <div className="dashboard-task-text">Pick up the kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-sidebar">
          <div className="dashboard-overlap-area">
            <div className="dashboard-rectangle-sidebar" />
            <div className="dashboard-sidebar-contents">
              <div className="dashboard-logo">
                <div className="dashboard-logo-text">Task Ease</div>
              </div>
              <div className="dashboard-options-section">
                <div className="dashboard-options-container">
                  <div className="dashboard-option-rectangle" />
                  <div className="dashboard-add-task-section">
                    <div className="dashboard-task-text">Add Task</div>
                    <div className="dashboard-options-container">
                      <div className="dashboard-add-task-ellipse" />
                      <img className="dashboard-add-icon" src="addicon.png" alt="Add task" />
                    </div>
                  </div>
                </div>
                <div className="dashboard-options-list">
                  <div className="dashboard-option-wrapper">
                    <div className="dashboard-option-text">Dashboard</div>
                  </div>
                  <div className="dashboard-option-active">
                    <div className="dashboard-option-text">Active</div>
                  </div>
                  <div className="dashboard-option-completed">
                    <div className="dashboard-option-text">Completed</div>
                  </div>
                  <div className="dashboard-option-completed">
                    <div className="dashboard-option-text">Recently Deleted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
