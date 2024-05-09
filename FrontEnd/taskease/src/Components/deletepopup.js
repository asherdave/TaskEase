import React from "react";
import "../Css/deletepopup.css";

export const DeletePopup = ({ taskId, closePopup, onDeleteSuccess }) => {
  const handleDelete = () => {
      const todos = JSON.parse(localStorage.getItem('todolist')) || [];
      const deletedTodos = JSON.parse(localStorage.getItem('deletedTasks')) || [];
      const taskIndex = todos.findIndex(task => task.id === taskId);

      if (taskIndex !== -1) {
          const [deletedTask] = todos.splice(taskIndex, 1);
          deletedTodos.push(deletedTask);
          localStorage.setItem('todolist', JSON.stringify(todos));
          localStorage.setItem('deletedTasks', JSON.stringify(deletedTodos));
          onDeleteSuccess();  // Call this callback to indicate successful deletion
      } else {
          console.error("Task not found with ID:", taskId);
      }
      closePopup(); // Close the DeletePopup
  };

  return (
      <div className="delete-popup">
          <div className="popup-content">
              <p>This task will be deleted. This action cannot be undone.</p>
              <button onClick={handleDelete}>Delete Task</button>
              <button onClick={closePopup}>Cancel</button>
          </div>
      </div>
  );
};


export default DeletePopup;
