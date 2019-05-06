import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
return(
  <div>

  <div className="Display">
  <CalculatorDisplay text ={"0"} />
  </div>

  <div className="first-row">
  <NumberButton text ="clear" buttonStyle = "buttonsize" />
  <NumberButton text ="%" buttonStyle = "colorbutton" />
  </div>

  <div className="second-row">
  <NumberButton text ="7" buttonStyle = "number" />
  <NumberButton text ="8" buttonStyle = "number" />
  <NumberButton text ="9" buttonStyle = "number" />
  <NumberButton text ="X" buttonStyle = "number" />
  </div>
  
  <div className="third-row">
  <NumberButton text ="4" buttonStyle = "number" />
  <NumberButton text ="5" buttonStyle = "number" />
  <NumberButton text ="6" buttonStyle = "number" />
  <NumberButton text ="-" buttonStyle = "number" />
  </div>

  <div className="forth-row">
  <NumberButton text ="1" buttonStyle = "number" />
  <NumberButton text ="2" buttonStyle = "number" />
  <NumberButton text ="3" buttonStyle = "number" />
  <NumberButton text ="+" buttonStyle = "number" />
  </div>

  <div className="fifth-row">
  <NumberButton text ="0" buttonStyle = "buttonsize" />
  <NumberButton text ="=" buttonStyle = "colorbutton" />
  </div>  
</div>
  
)

};

export default App;
