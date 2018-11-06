import React from "react";
import "./Button.css";

const ActionButton = () => {
  return (
    <div className="action-btn">
      <button>Clear</button>
      <button>
        <i class="fas fa-divide" />
      </button>
    </div>
  );
};

export default ActionButton;
