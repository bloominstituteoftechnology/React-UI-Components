import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton  from './components/ButtonComponents/NumberButton'

const Container = (props) => {
    return <div className={props.displayStyle}></div>
  }



const App = () => (<div displayStyle="app">
<div displayStyle="calc-wrapper">
   <CalculatorDisplay /> 
  <NumberButton />
  <ActionButton /> 
  </div>
  </div>);

export default App;
