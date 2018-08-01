import React from 'react';
import './App.css';

import BtnContainer from './components/ButtonComponents/BtnContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (

    <div className="container">
    <CalculatorDisplay />
    <BtnContainer className="lngButton">
      <ActionButton styles="lgBtn" text="clear" />
    </BtnContainer>
    <BtnContainer className="lngButton">
       
      <NumberButton styles="btnColor" text="/"/>
    </BtnContainer>

    <BtnContainer>
      <NumberButton styles="btn" text="7"/>
      <NumberButton styles="btn" text="8"/>
      <NumberButton styles="btn" text="9"/>
      <NumberButton styles="btnColor" text="X"/>
    </BtnContainer>
    <BtnContainer>
      <NumberButton styles="btn" text="4"/>
      <NumberButton styles="btn" text="5"/>
      <NumberButton styles="btn" text="6"/>
      <NumberButton styles="btnColor" text="-"/>
    </BtnContainer>
    <BtnContainer>
      <NumberButton styles="btn" text="1"/>
      <NumberButton styles="btn" text="2"/>
      <NumberButton styles="btn" text="3"/>
      <NumberButton styles="btnColor" text="+"/>
    </BtnContainer>

    <BtnContainer className="lngButton">
      <ActionButton styles="lgButton" text="0" />
      </BtnContainer>
      <BtnContainer className="lngButton">
      <NumberButton styles="btnColor" text="="/>
    </BtnContainer>

    </div>
  );
};

export default App;
