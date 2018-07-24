import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton";
import Display from "./components/DisplayComponents/CalculatorDisplay";


const PadMaker = () =>{
  const padText = [{text:"clear", style:"action"},{text:"/", style:"functionButton"},{text:"7", style:"numberButton"},{text:"8", style:"numberButton"},{text:"9", style:"numberButton"},{text:"X", style:"functionButton"},{text:"6", style:"numberButton"},{text:"5", style:"numberButton"},{text:"4", style:"numberButton"},{text:"-", style:"functionButton"},{text:"1", style:"numberButton"},{text:"2", style:"numberButton"},{text:"3", style:"numberButton"},{text:"+", style:"functionButton"},{text:"0", style:"action"},{text:"=", style:"functionButton"}];
  return padText.map((element, index) => {
      return (<NumberButton key={index} uni={index} buttonContent={element.text} buttonStyle={element.style} />)
  });
}

const App = () => {
  return (
    <div>
      
      <Display text= "0" />

      <div className="calcPad">
      
      <PadMaker />
    </div>
    </div>
  );
};



export default App;
