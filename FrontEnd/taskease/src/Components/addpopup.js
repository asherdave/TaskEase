import React, { useState, useEffect } from "react";
import "../Css/addPopup.css";

export const AddPopup = ({ closePopup, addTask }) => {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState(""); // Default category can be empty or set to a default value
  const [newDescription, setNewDescription] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const handleSave = () => {
    let newTodoItem = {
      id: Date.now(),  // Adding a unique ID based on the current timestamp
      title: newTitle,
      category: newCategory,
      description: newDescription,
      dueDate: newDueDate
    };
  
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos, newTodoItem];
      localStorage.setItem('todolist', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  
    addTask(newTodoItem);
    closePopup();
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
  }, []);

  const canSave = newTitle && newCategory && newDescription && newDueDate;

  return (
    <div className="add-popup">
      <div className="contents-wrapper">
        <div className="contents">
          <div className="input">
            <div className="title-wrapper">
              <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="add-title" placeholder="Add title" />
            </div>
            <div className="category-wrapper">
              {/* Dropdown menu for category selection */}
              <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="add-category">
                <option value="">Select Category</option>
                <option value="School">School</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            <div className="description">
              <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="add-desc" placeholder="Add description" />
            </div>
            <div className="date-wrapper">
              <input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} className="add-date" />
            </div>
          </div>  
          <div className="buttons">
            <button className="cancel-button" onClick={closePopup}>
              <div className="div-cancel">Cancel</div>
            </button>
            <button className="save-button" onClick={handleSave} disabled={!canSave}>
              <div className="div-save">Save</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
