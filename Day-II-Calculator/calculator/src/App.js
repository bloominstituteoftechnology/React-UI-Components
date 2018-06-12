import React from 'react';
import './App.css';
import NumberButton from '././components/ButtonComponents/NumberButton';
import ActionButton from '././components/ButtonComponents/ActionButton';
const App = () => {
  return (
    <div>

 	<NumberButton customClass="number-btn" number="7" />
        <NumberButton customClass="number-btn" number="8" />
        <NumberButton customClass="number-btn" number="9" />
	<ActionButton customClass="action-btn" action="&#xd7;" />
	<br /> 
	<NumberButton customClass="number-btn" number="4" />
        <NumberButton customClass="number-btn" number="5" />
        <NumberButton customClass="number-btn" number="6" /> 
	<ActionButton customClass="action-btn" action="&#x208b;" />
	<br />  
	<NumberButton customClass="number-btn" number="1" />
	<NumberButton customClass="number-btn" number="2" />
	<NumberButton customClass="number-btn" number="3" /> 
	<ActionButton customClass="action-btn" action="&#x2b;" />



    </div>
  );
};

export default App;
