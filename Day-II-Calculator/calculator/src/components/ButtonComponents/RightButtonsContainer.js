import React from 'react';
import ActionButton from './ActionButton';

//const cardText = "React makes it painless to create interactive UIs. Desing Simple views for each state in your application.";

const functionSymbols = ['÷','×','−','+','='];

function RightButtonsContainer() {
  return (
  	//currently hardcoding values here but I think when I get everything working, I want to try to load an entire
  	//card by making one function call from app.js or something similarly "main"-ish
     <div className="calc-right-buttons-container">
      {functionSymbols.map(symbol => <ActionButton key={symbol} label={symbol} />)}
    </div>
  );
}

export default RightButtonsContainer;