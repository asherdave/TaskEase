import React from "react";
import "../Css/addPopup.css";

export const AddPopup = () => {
  // Function to handle the cancel action
  const handleCancel = () => {
    console.log("Cancel action triggered"); // You can replace this with any logic you need
  };

  // Function to handle the save action
  const handleSave = () => {
    console.log("Save action triggered"); // You can replace this with any logic you need
  };

  return (
    <div className="add-popup">
      <div className="add-popup-wrapper">
        <div className="contents-wrapper">
          <div className="contents">
            <div className="input">
              <div className="title-wrapper">
                <input type="text" className="add-title" placeholder="Add title" />
              </div>
              <div className="category-wrapper">
                <input type="text" className="add-category" placeholder="Add category" />
              </div>
              <div className="description">
                <input type="text" className="add-desc" placeholder="Add description" />
              </div>
              <div className="date-wrapper">
                <input type="date" className="add-date" placeholder="Add due date" />
              </div>
            </div>
            <div className="buttons">
              <button className="cancel-button" onClick={handleCancel}>
                <div className="div">Cancel</div>
              </button>
              <button className="save-button" onClick={handleSave}>
                <div className="div">Save</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
