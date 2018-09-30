import React from 'react';
import './Display.css';
import ScreenRow from './ScreenRow';


const CalculatorDisplay = (props) => {
    return ( 
        <div className="screen"> 
      <ScreenRow />
     {/*  <ScreenRow value={props.answer}/> */}
       </div>
       
   )
};
export default CalculatorDisplay;