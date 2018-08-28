import React from 'react';
import './Button.css';

function NumberButton(props) {
    return (
      <div className="nums">
        <DynamicButton text="clear" type="large"/>
        <DynamicButton text="7" type="small"/>
        <DynamicButton text="8" type="small"/>
        <DynamicButton text="9" type="small"/>
        <DynamicButton text="4" type="small"/>
        <DynamicButton text="5" type="small"/>
        <DynamicButton text="6" type="small"/>
        <DynamicButton text="1" type="small"/>
        <DynamicButton text="2" type="small"/>
        <DynamicButton text="3" type="small"/>
        <DynamicButton text="0" type="large"/>
      </div>
    );
}
  
function DynamicButton(props) {
    return (
      <button className={`dynamic-button ${props.type}`}>{props.text}</button>
    );
}
  
export default NumberButton;
  