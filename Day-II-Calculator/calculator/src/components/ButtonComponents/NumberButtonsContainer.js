import React from 'react';
import NumberButton from './NumberButton';

//const cardText = "React makes it painless to create interactive UIs. Desing Simple views for each state in your application.";

function NumberButtonsContainer() {
  return (
  	//currently hardcoding values here but I think when I get everything working, I want to try to load an entire
  	//card by making one function call from app.js or something similarly "main"-ish
     <div className="calc-numbers-container">
    	<NumberButton number={1}/>
    	<NumberButton number={2}/>
    	<NumberButton number={3}/>
    	<NumberButton number={4}/>
    	<NumberButton number={5}/>
    	<NumberButton number={6}/>
    	<NumberButton number={7}/>
    	<NumberButton number={8}/>
    	<NumberButton number={9}/>
      <NumberButton number={0} large />
    </div>
  );
}

export default NumberButtonsContainer;