import React from 'react';

import './App.css';



const App = () => {
  return (
    <div class='container'>
      <div class='display'>
        <Display />
      </div>
      <div class='buttons'>
      <div class='row1'>
        <div class='clear'>
          <ButtonWide buttonText='clear' />
        </div>
          <DynamicButtonRed buttonText='÷' />
        </div>
      </div>
      <div class='row2'>
        <DynamicButtonGray buttonText='7' />
        <DynamicButtonGray buttonText='8' />
        <DynamicButtonGray buttonText='9' />
        <DynamicButtonRed buttonText='X' />
      </div>
      <div class='row3'>
        <DynamicButtonGray buttonText='4' />
        <DynamicButtonGray buttonText='5' />
        <DynamicButtonGray buttonText='6' />
        <DynamicButtonRed buttonText='-' />
      </div>
      <div class='row4'>
        <DynamicButtonGray buttonText='1' />
        <DynamicButtonGray buttonText='2' />
        <DynamicButtonGray buttonText='3' />
        <DynamicButtonRed buttonText='+' />
      </div>
      <div class='row5'>
        <DynamicButtonGray buttonText='0' />
          <div class='equal'>
            <DynamicButtonRed buttonText='=' />
        </div>
      </div>
    </div>
  );
};




export default App;
