import React from 'react';
import './Button.css';

const ActionButton = () => {
   return (
    <div className="btn-group-vertical">
        <button type="button" className="btn btn-primary">÷</button>
        <button type="button" className="btn btn-primary">X</button>
        <button type="button" className="btn btn-primary">―</button>
        <button type="button" className="btn btn-primary">+</button>
        <button type="button" className="btn btn-primary">=</button>
    </div>
   );
}

export default ActionButton;