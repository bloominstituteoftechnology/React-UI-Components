import React from 'react';
// import './Display.css';
import NumberDisplay from './NumberDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';


const CalculatorDisplay = props => {
    console.log(props);
  return (
      <div className="calc-container">
       <NumberDisplay number = {0} />
       <ActionButton text="clear" className="clearNum"/>
       <ActionButton text="&divide;" className="divide"/>
       <NumberButton number= {7} className="seven" />
       <NumberButton number= {8} className="eight" />
       <NumberButton number= {9} className="nine" />
       <ActionButton text="&times;" className="multiply"/>
       <NumberButton number= {4} className="four" />
       <NumberButton number= {5} className="five" />
       <NumberButton number= {6} className="six" />
       <ActionButton text="&#8722;" className="minus"/>
       <NumberButton number= {1} className="one" />
       <NumberButton number= {2} className="two" />
       <NumberButton number= {3} className="three" />
       <ActionButton text="+" className="plus"/>
       <NumberButton number= {0} className="zero" />
      </div>
  );
};

export default CalculatorDisplay;