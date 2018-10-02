import React from "react";
import "./Button.css";
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';


const numButtons = ['9','8','7','6','5','4','3','2','1'];
const opButtons = ['/','X','-','+','='];

const ButtonsContainer = () => {
  return (
    <div className="buttonContainer">
      <div className="numButtons">
        <ActionButton btnValue = "clear" />
        
        {numButtons.map((num) => {return <NumberButton key={num} buttonStyle='numberButton' btnValue = {num}/> })}

        <ActionButton btnValue = "0"/>
      </div>

      <div className="opButtons">
        {opButtons.map((op) => {return <NumberButton key={op} buttonStyle='operatorButton' btnValue = {op}/> })}

      </div>
    </div>
  );
};

export default ButtonsContainer;
