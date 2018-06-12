import React from 'react';
import './App.css';
import NumberButton from '././components/ButtonComponents/NumberButton';
import ActionButton from '././components/ButtonComponents/ActionButton';
import EmptyButton from '././components/ButtonComponents/EmptyButton';

NumberButton.defaultProps ={ 
        number:`1`
        
        };


const App = () => {
  return (
    <div>

	<EmptyButton customClass="blank-btn" number="clear"  />
	<ActionButton customClass="action-btn" action="&#xf7;" />  
	<br />  
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
	<br />
	<EmptyButton customClass="blank-btn" number="0"  />
        <ActionButton customClass="action-btn" action="&#x3d;" /> 


    </div>
  );
};

export default App;
