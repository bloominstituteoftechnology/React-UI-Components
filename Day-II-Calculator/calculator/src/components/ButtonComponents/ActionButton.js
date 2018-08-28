import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
      <div className="action">
        <DynamicButton text="/" type="small"/>
        <DynamicButton text="*" type="small"/>
        <DynamicButton text="-" type="small"/>
        <DynamicButton text="+" type="small"/>
        <DynamicButton text="=" type="small"/>
        
      </div>
    );
}
  
function DynamicButton(props) {
    return (
      <button className={`dynamic-button ${props.type}`}>{props.text}</button>
    );
}

  
export default ActionButton;
  