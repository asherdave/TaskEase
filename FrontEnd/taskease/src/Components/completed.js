import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../Css/completed.css";
import checkbox from "../Images/check-box.png";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";
import plusicon from "../Images/plus-icon.png";
import logout from "../Images/logout-icon.png";
import profile from "../Images/profile-icon.png";
import compcheck from "../Images/complete-checkbox.png";
import arrowdesc from "../Images/arrow-desc.png";

export const Completed = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Load completed tasks from localStorage
    const loadedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setCompletedTasks(loadedCompletedTasks);
  }, []);


  return (
    <div className="completed">
      <div className="div">
        <div className="div-complete">
          <header className="header">
            <div className="frame">
            <img className="dashboard-icon" src={searchicon} alt="Search" />
              <div className="text-wrapper">Search</div>
            </div>
            <div className="frame-2">
            <img className="dashboard-icon" src={tips} alt="Tips" />
              <img className="ellipse" alt="Ellipse" src={profile} />
            </div>
            <div className="heading">
              <div className="sign-out">
                <div className="item">
                  <div className="text-wrapper-2">Sign out</div>
                  <img className="mdi-logout" alt="Mdi logout" src={logout}/>
                </div>
              </div>
            </div>
          </header>
          <div className="tasks-content">
            <div className="date-heading">
              <div className="text-wrapper-3">Today’s Completed Tasks</div>
            </div>
            <div className="tasks">
              {completedTasks.map((task, index) => (
                <div key={index} className="task">
                  <div className="checklist-1">
                    <img className="dashboard-material-symbols" src={compcheck} alt="Completed" />
                    <div className="text-wrapper-4">{task.title}</div>
                  </div>
                  <img className="arrow-descrip" src={arrowdesc} alt="Details" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sidebar-complete">
          <div className="overlap">
            <div className="rectangle" />
            <div className="contents">
              <div className="logo">
                <div className="text-wrapper-5">Task Ease</div>
              </div>
              <div className="options-and-button">
                <div className="div-2">
                  <div className="rectangle-2" />
                  <div className="add-task">
                    <div className="text-wrapper-4">Add Task</div>
                    <div className="div-2">
                      <div className="ellipse-2" />
                      <img className="add" alt="Add" src={plusicon}/>
                    </div>
                  </div>
                </div>
                <div className="options">
                <Link to="/dashboard" className="options">
                  <div className="div-wrapper">
                    <div className="text-wrapper-8">Dashboard</div>
                  </div>
                </Link>

                <Link to="/active" className="options">
                  <div className="div-wrapper-1">
                    <div className="text-wrapper-8">Active</div>
                  </div>
                </Link>

                  <div className="div-wrapper-2">
                    <div className="text-wrapper-8">Completed</div>
                  </div>

                <Link to="/deleted" className="options">
                  <div className="div-wrapper-3">
                    <div className="text-wrapper-8">Recently Deleted</div>
                  </div>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
