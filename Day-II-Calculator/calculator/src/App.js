import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';




const App = () => {
  
  let total = 0;

  function clickHandler (item){
    console.log(item, " button was clicked");
    total = item;
  }
  
  function populate(num){
    let arr = [];
    for (let i = 0; i<num; i++){
      arr.push(i);
    }
    console.log(fill(arr));
    return fill(arr);
  }
  
  function fill(arr){
    
    return arr.map( item => (
        <NumberButton onClick={clickHandler} number={item} displayType={`n${item.toString()}-button number`}/>
    ));
  }

    return (
    <div className="container">
      <CalculatorDisplay display={total} displayType = "hodisplay"/>
      {populate(10)}
      <ActionButton type='clear' displayType = "clear-button number"/>
    
      <ActionButton type='÷' displayType = "divide-button action"/>
      <ActionButton type='x' displayType = "multiply-button action"/>
      <ActionButton type='-' displayType = "minus-button action"/>
      <ActionButton type='+' displayType = "add-button action"/>
      <ActionButton type='=' displayType = "equals-button action"/>
    </div>
  );
};

export default App;
