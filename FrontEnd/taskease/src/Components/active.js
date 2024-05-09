import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../Css/active.css";
import checkbox from "../Images/check-box.png";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";
import plusicon from "../Images/plus-icon.png";
import logout from "../Images/logout-icon.png";
import profile from "../Images/profile-icon.png";
import arrowdesc from "../Images/arrow-desc.png";
import CurrentDetail from "../Components/currentdetail.js";
import AddPopup from "../Components/addpopup.js";

export const Active = () => {
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [showDetailPopup, setShowDetailPopup] = useState(false);
  const [schoolTasks, setSchoolTasks] = useState([]);
  const [personalTasks, setPersonalTasks] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleDetailPopup = (task) => {
    setSelectedTask(task);
    setShowDetailPopup(true);
  };

  const handleAddPopup = () => {
    setShowAddPopup(true);
  };

  const closePopup = () => {
    setShowDetailPopup(false);
    setUpdateTrigger(!updateTrigger);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist')) || [];
    const schoolCategoryTasks = savedTodos.filter(task => task.category === "School");
    const personalCategoryTasks = savedTodos.filter(task => task.category === "Personal");
    setSchoolTasks(schoolCategoryTasks);
    setPersonalTasks(personalCategoryTasks);
    setTodos(savedTodos);
  }, [updateTrigger]);

  const addTask = (newTask) => {
    const updatedTodos = [...allTodos, newTask];
    setTodos(updatedTodos);
    localStorage.setItem('todolist', JSON.stringify(updatedTodos));
    setUpdateTrigger(!updateTrigger);
  };

  return (
    <div className="active">
      <div className="div">
        <div className="div-active">
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
                  <img className="mdi-logout" alt="Mdi logout" src={logout} />
                </div>
              </div>
            </div>
          </header>
          <div className="task-content">
            <div className="date-heading">
              <div className="text-wrapper-3">School Category</div>
            </div>
            <div className="tasks">
              {schoolTasks.map((task, index) => (
                <div key={index} className="task">
                  <div className="checklist">
                    <div className="text-wrapper-4">{task.title}</div>
                    <div className="due">{task.dueDate}</div>
                  </div>
                  <img className="arrow-descrip" src={arrowdesc} alt="Arrow descrip" onClick={() => handleDetailPopup(task)} />
                </div>
              ))}
            </div>
          </div>
          <div className="task-content-2">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Personal Category</div>
            </div>
            <div className="tasks">
              {personalTasks.map((task, index) => (
                <div key={index} className="task">
                  <div className="checklist">
                    <div className="text-wrapper-4">{task.title}</div>
                    <div className="due">{task.dueDate}</div>
                  </div>
                  <img className="arrow-descrip" src={arrowdesc} alt="Arrow descrip" onClick={() => handleDetailPopup(task)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="overlap">
          <div className="rectangle" />
          <div className="contents">
            <div className="logo">
              <div className="text-wrapper-5">Task Ease</div>
            </div>
            <div className="options-and-button">
              <div className="div-2">
                <div className="rectangle-2" />
                <div className="add-task" onClick={handleAddPopup}>
                  <div className="text-wrapper-4">Add Task</div>
                  <div className="div-2">
                    <div className="ellipse-2" />
                    <img className="add" alt="Add" src={plusicon} />
                  </div>
                </div>
              </div>
              <div className="options">
                <Link to="/dashboard" className="options">
                  <div className="dashboard-2">
                    <div className="text-wrapper-6">Dashboard</div>
                  </div>
                </Link>
                <div className="div-wrapper-2">
                  <div className="text-wrapper-6">Active</div>
                </div>
                <Link to="/completed" className="options">
                  <div className="completed">
                    <div className="text-wrapper-6">Completed</div>
                  </div>
                </Link>
                <Link to="/deleted" className="options">
                  <div className="completed">
                    <div className="text-wrapper-6">Recently Deleted</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddPopup && <AddPopup closePopup={() => setShowAddPopup(false)} addTask={addTask} />}
      {showDetailPopup && selectedTask && <CurrentDetail task={selectedTask} closePopup={closePopup} />}
    </div>
  );
};

export default Active;
