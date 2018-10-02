import React from "react";
import "./Display.css";
import NumberButton from "../ButtonComponents/NumberButton";
import ActionButton from "../ButtonComponents/ActionButton";

const values = ['/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '=']
const CalculatorDisplay = props => {
  return (
  <div className='calcDisplay'>
    <ActionButton buttonText="clear"/>
    {values.map(num => {
      let style;
        if ('=+-x/'.includes(num)) {
          style = 'red';
        }
      return (
        <NumberButton buttonText={num} buttonStyles={style} />
      )
    })}

    <ActionButton buttonText="0"/>

  </div>
  )
};

export default CalculatorDisplay;
