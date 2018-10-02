import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div className="action-container">
      <div>
        <p>&divide;</p>
      </div>
      <div>
        <p>&times;</p>
      </div>
      <div>
        <p>&#8722;</p>
      </div>
      <div>
        <p>&#43;</p>
      </div>
      <div>
        <p>&#61;</p>
      </div>
    </div>
  );
};

export default ActionButton;
