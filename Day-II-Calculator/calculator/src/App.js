import React from 'react';
import './App.css';

import BtnContainer from './components/ButtonComponents/BtnContainer';

import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (

    <div className="container">

    <BtnContainer>
    <NumberButton styles="btn" text="7"/>
    <NumberButton styles="btn" text="8"/>
    <NumberButton styles="btn" text="9"/>
      
    </BtnContainer>


    </div>
  );
};

export default App;
