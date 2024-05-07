import React from "react";
import "../Css/deletepopup.css";

export const DeletePopup = () => {
  return (
    <div className="delete-popup">
      <div className="div-wrapper">
        <div className="group">
          <div className="div-wrapper">
            <div className="delete">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="due">Cancel</div>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap">
                  <div className="title">
                    <p className="text-wrapper">
                      This task will be deleted. This action cannot be undone.
                    </p>
                    <div className="div">Delete Note</div>
                  </div>
                  <img className="line" alt="Line" src="line-4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
