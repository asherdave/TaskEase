import React, { useRef, useState, useEffect } from "react";
import "../Css/currentdetail.css";
import checkbox from "../Images/check-box.png";
import editicon from "../Images/edit-button.png";
import deleteicon from "../Images/delete-button.png";
import { EditingATask } from "./editdetail"; // Import the editing component
import { DeletePopup } from './deletepopup'; // Adjust the path as necessary

export const CurrentDetail = ({ task, updateTask, closePopup }) => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closePopup]);

  const handleCheckboxClick = () => {
    console.log("Task marked as completed:", task.id);
  
    // Retrieve current tasks and completed tasks from localStorage
    const todos = JSON.parse(localStorage.getItem('todolist')) || [];
    const completedTodos = JSON.parse(localStorage.getItem('completedTasks')) || [];
  
    // Find the index of the task to be completed
    const taskIndex = todos.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      const [completedTask] = todos.splice(taskIndex, 1);
      completedTodos.push(completedTask);
  
      // Update localStorage with the new lists
      localStorage.setItem('todolist', JSON.stringify(todos));
      localStorage.setItem('completedTasks', JSON.stringify(completedTodos));
  
      // Optionally close the popup if needed
      closePopup();
    } else {
      console.error("Task not found with ID:", task.id);
    }
  };
  

  const handleEditClick = () => {
    setIsEditing(true); // Set isEditing to true to switch to the edit mode
  };

  const handleDeleteClick = () => {
    console.log("Task ID on delete button click:", task.id); // Log to verify the task ID
    setShowDeletePopup(true);
};



  

  if (isEditing) {
    // Render the EditingATask component if in edit mode
    return (
      <EditingATask task={task} updateTask={updateTask} closePopup={() => {
        setIsEditing(false); // Optional: reset edit mode on close
        closePopup();
      }} />
    );
  }

  return (
        <div className="current-detail-popup" ref={popupRef}>
          <div className="task-detail">
            <div className="details">
              <div className="title">
                <div className="text-wrapper">{task.title}</div>
              </div>
              <div className="description">
                <div className="div">Description</div>
                <p className="p">{task.description}</p>
              </div>
            </div>
            <div className="buttons">
              <img className="material-symbols" src={checkbox} alt="Check box" onClick={handleCheckboxClick} />
              <div className="buttons-2">
                <img className="icon-instance-node" src={editicon} alt="edit icon" onClick={handleEditClick} />
                <img className="icon-instance-node" src={deleteicon} alt="delete icon" onClick={handleDeleteClick} />
              </div>
            </div>
          </div>
          {showDeletePopup && (
            <DeletePopup
                taskId={task.id}
                closePopup={() => setShowDeletePopup(false)}
                onDeleteSuccess={closePopup}  // Pass closePopup from CurrentDetail as onDeleteSuccess
            />
        )}
        </div>
  );
};

export default CurrentDetail;
