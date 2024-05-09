import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../Css/recentlydeleted.css";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";
import plusicon from "../Images/plus-icon.png";
import logout from "../Images/logout-icon.png";
import profile from "../Images/profile-icon.png";
import compcheck from "../Images/complete-checkbox.png";

export const RecentlyDeleted = () => {
  const [deletedTasks, setDeletedTasks] = useState([]);

  useEffect(() => {
    const loadDeletedTasks = () => {
      const tasks = JSON.parse(localStorage.getItem('deletedTasks')) || [];
      setDeletedTasks(tasks);
    };

    loadDeletedTasks();
  }, []);


  return (
    <div className="recently-deleted">
      <div className="div">
        <div className="div-recent">
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
          <div className="delete-content">
          <div className="date-heading">
            <div className="text-wrapper-3">Recently Deleted</div>
          </div>
          <div className="date-heading">
            <p className="p">
              Tasks are available here for 30 days. After that time, tasks will be permanently deleted.
            </p>
          </div>
          <div className="tasks">
            {deletedTasks.map((task, index) => (
              <div key={index} className="cheklist-wrapper">
                <div className="cheklist">
                  <img className="dashboard-material-symbols" src={compcheck} alt="Check box" />
                  <div className="text-wrapper-4">{task.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="sidebar">
          <div className="overlap">
            <div className="rectangle-2" />
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
                  <div className="div-wrapper-deleted">
                    <div className="text-wrapper-6">Dashboard</div>
                  </div>
                </Link>

                <Link to="/active" className="options">
                  <div className="div-wrapper1">
                    <div className="text-wrapper-6">Active</div>
                  </div>
                </Link>

                <Link to="/completed" className="options">
                  <div className="completed">
                    <div className="text-wrapper-6">Completed</div>
                  </div>
                  </Link>
                  <div className="completed-2">
                    <div className="text-wrapper-6">Recently Deleted</div>
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
