import React from 'react';
import './Display.css';

const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input className="calculatorDisplay2" type="text" readOnly value={props.value}/>
    </div>
  )
}



export default ScreenRow;