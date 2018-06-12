import React from 'react';
import './Buttons.css';

const OperatorButtons = () => {
  return (
    <div className="operators">
      <button className="operator">&divide;</button>
      <button className="operator">&times;</button>
      <button className="operator">&minus;</button>
      <button className="operator">&#x2b;</button>
      <button className="operator">&#x3d;</button>
    </div>
  );
};

export default OperatorButtons;
