import React, { useState, useEffect } from "react";
import "../Css/editdetail.css";

export const EditingATask = ({ task, closePopup }) => {
  const [allTodos, setTodos] = useState([]);
  const [title, setTitle] = useState(task.title);
  const [category, setCategory] = useState(task.category);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todolist')) || [];
    setTodos(savedTodos);
    console.log("Tasks loaded from localStorage:", savedTodos);
  }, []);

  const handleSave = () => {
    if (!title || !category || !description || !dueDate) {
      setError("All fields must be filled out.");
      return;
    }

    try {
      const taskIndex = allTodos.findIndex(t => t.title === task.title && t.description === task.description);
      if (taskIndex === -1) {
        setError("Task not found.");
        console.error("Task not found in local storage.");
        return;
      }

      const updatedTasks = [...allTodos];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], title, category, description, dueDate };
      localStorage.setItem('todolist', JSON.stringify(updatedTasks));
      console.log("Task updated and saved back to localStorage at index", taskIndex);
      closePopup();
    } catch (e) {
      console.error("Error updating task:", e);
      setError("Failed to update task. Please check the console for more details.");
    }
  };

  return (
    <div className="editing-a-task">
      <div className="add-popup-wrapper">
        <div className="add-popup">
          <div className="contents">
            <div className="input">
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Edit title" />
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="School">School</option>
                <option value="Personal">Personal</option>
              </select>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Edit description" />
              <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="buttons">
              <button className="cancel-button" onClick={closePopup}>Cancel</button>
              <button className="save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditingATask;
