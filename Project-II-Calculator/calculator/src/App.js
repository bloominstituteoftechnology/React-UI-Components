import React from 'react';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return ( 
    < div className="container">
    <CalculatorDisplay />
      < div className="row">
        <ActionButton />
        < h3> Welcome to React Calculator < /h3> 
        < p> We have given you a starter project.You 'll want to build out your components in their respective files, remove this code and replace it with the proper components. < /p> 
        < p>
          < strong>
            Don 't forget to `default export` your components and import them here
            inside of this file in order to make them work. < /strong> < /p> 
      < /div> 
    < /div> 
  ); 
}; 

export default App;