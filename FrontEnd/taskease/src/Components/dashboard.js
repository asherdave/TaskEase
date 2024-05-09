import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../Css/dashboard.css";
import woman from "../Images/woman.png";
import checkbox from "../Images/check-box.png";
import tips from "../Images/tips.png";
import searchicon from "../Images/search-icon.png";
import plusicon from "../Images/plus-icon.png";
import logout from "../Images/logout-icon.png";
import profile from "../Images/profile-icon.png";
import AddPopup from "../Components/addpopup.js";


export const Dashboard = () => {

  const [showAddPopup, setShowAddPopup] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  const handleAddPopup= () => {
    setShowAddPopup(true);
};

useEffect(() => {
  // Load tasks from local storage
  let savedTodos = JSON.parse(localStorage.getItem('todolist'));
  if (savedTodos) {
    setTodos(savedTodos);
  }
  
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  setCurrentDate(today.toLocaleDateString("en-US", options));
}, []); // Run this effect only once when component mounts

const addTask = (newTask) => {
  // Update allTodos with the new task
  setTodos([...allTodos, newTask]);

  // Update local storage with the updated allTodos
  localStorage.setItem('todolist', JSON.stringify([...allTodos, newTask]));
};
  
  return (
    <div className="dashboard">
      <div className="div">
        <div className="div-2">
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
          <div className="main">
            <div className="hero">
              <div className="overlap-group">
                <div className="rectangle" />
                <div className="name">
                  <div className="text-wrapper-3">Hello, Beautiful Human!</div>
                  <p className="p">What do you want to do today?</p>
                </div>

              </div>
            </div>
            <div className="today-s">
              <div className="date-heading">
                <div className="text-wrapper-4">Today’s Tasks</div>
                <div className="delete-and-date">
                  <div className="text-wrapper-5">Delete All</div>
                  <div className="text-wrapper-6">{currentDate}</div>
                </div>
              </div>
              <div className="tasks-and-stat">
                <div className="tasks">
                {allTodos.map((item,index)=>{
                  return(
                    <div key={index} className="task"> 
                    <div className="checklist">
                        <img className="dashboard-material-symbols" src={checkbox} alt="Check box" />
                        <div className="text-wrapper-7">{item.title}</div> {/* Assuming 'taskName' is the property holding task names */}
                    </div>
                </div>
                  )
                })}
                </div>
                <div className="stats">
                  <div className="div-3">
                    <div className="rectangle-2" />
                    <div className="complete-stats">
                      <div className="stats-2">
                        <div className="text-wrapper-8">40%</div>
                        <div className="text-wrapper-9">Completed tasks</div>
                      </div>
                    </div>
                  </div>
                  <div className="div-3">
                    <div className="rectangle-3" />
                    <div className="active-stats">
                      <div className="stats-2">
                        <div className="text-wrapper-8">60%</div>
                        <div className="text-wrapper-9">Active tasks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="overlap">
          <div className="rectangle-4" />
          <div className="contents">
            <div className="logo">
              <div className="text-wrapper-10">Task Ease</div>
            </div>
            <div className="options-and-button">
              <div className="div-4">
                <div className="rectangle-5" />
                <div className="add-task" onClick={handleAddPopup}>
                  <div className="text-wrapper-7">Add Task</div>
                  <div className="div-4">
                    <div className="ellipse-2" />
                    <img className="add" alt="Add" src={plusicon}/>
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="div-wrapper">
                  <div className="text-wrapper-11">Dashboard</div>
                </div>

                <Link to="/active" className="options">
                  <div className="active">
                    <div className="text-wrapper-11">Active</div>
                  </div>
                </Link>

                <Link to="/completed" className="options">
                <div className="completed">
                  <div className="text-wrapper-11">Completed</div>
                </div>
                </Link>

                <Link to="/deleted" className="options">
                <div className="completed">
                  <div className="text-wrapper-11">Recently Deleted</div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddPopup && <AddPopup closePopup={() => setShowAddPopup(false)} addTask={addTask} />}

    </div>
  );
};

export default Dashboard;
