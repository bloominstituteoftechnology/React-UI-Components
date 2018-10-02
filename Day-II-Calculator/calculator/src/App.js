import React from 'react';
import './App.css';
import ButtonPanel from "./components/ButtonComponents/ButtonPanel.js";
import Display from "./components/DisplayComponents/CalculatorDisplay.js";

const App = () => {
  return (
       <div className = "container">
       <Display></Display>
       <ButtonPanel></ButtonPanel>
       </div>
   );
   };



export default App;

