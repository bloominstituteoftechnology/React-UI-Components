import React from 'react';
import './Button.css';

const ActionButton = () => {
  // prop.displayNumber === 1
  return (
    <div id="actionKeys">
      <div className="btn-actions">÷</div>
      <div className="btn-actions">X</div>
      <div className="btn-actions">-</div>
      <div className="btn-actions">+</div>
      <div className="btn-actions">=</div>
  </div>
  )
}

export default ActionButton;