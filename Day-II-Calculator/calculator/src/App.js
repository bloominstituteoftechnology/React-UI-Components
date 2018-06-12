import React from 'react';
import './App.css';
import NumberButton from '././components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>

 	<NumberButton customClass="number-btn" number="7" />
        <NumberButton customClass="number-btn" number="8" />
        <NumberButton customClass="number-btn" number="9" />
	<br /> 
	<NumberButton customClass="number-btn" number="4" />
        <NumberButton customClass="number-btn" number="5" />
        <NumberButton customClass="number-btn" number="6" /> 
	<br />  
	<NumberButton customClass="number-btn" number="1" />
	<NumberButton customClass="number-btn" number="2" />
	<NumberButton customClass="number-btn" number="3" /> 




    </div>
  );
};

export default App;
