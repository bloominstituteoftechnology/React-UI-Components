import React from 'react';

import './App.css';

import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';
import GreyButton from './components/ButtonComponents/NumberButton';
import RedButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (


    <div className="calculator-container">

      <div className="display"><CalcDisplay /></div>

      <div className="keypad">
        <div className="grey">
          <div>
            <GreyButton text={"Clear"} type={"grey-number wide-button"}/>
          </div>

          <div className="numbers">
          <GreyButton text={"7"} type={"grey-number"}/> <GreyButton text={"8"} type={"grey-number"}/> <GreyButton text={"9"} type={"grey-number"}/>
          <GreyButton text={"6"} type={"grey-number"}/> <GreyButton text={"5"} type={"grey-number"}/> <GreyButton text={"4"} type={"grey-number"}/>
          <GreyButton text={"3"} type={"grey-number"}/> <GreyButton text={"2"} type={"grey-number"}/> <GreyButton text={"1"} type={"grey-number"}/>
          </div>
          
          <div>
            <GreyButton text={"0"} type={"grey-number wide-button"}/></div>
        </div>

        <div className="red">
          <RedButton text={"/"} type={"red-action"}/> <RedButton text={"x"} type={"red-action"}/> <RedButton text={"-"} type={"red-action"}/>
          <RedButton text={"+"} type={"red-action"}/> <RedButton text={"="} type={"red-action"}/>
        </div>
      </div>
    </div>
  );
};

export default App;
