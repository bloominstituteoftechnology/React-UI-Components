import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer.js'

const App = () => {
  return (
    <div className='container'>
    <Display />
    <ButtonContainer/>
      <div className='bigAndSmall'>
        <div className='bigButton'>Clear</div>
        <div className='testDiv'>%</div>
      </div>
      <div className='numberAndOperator'>
        <div className='smallButtons'>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
        </div>
        <div className='operatorButtons'>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
          <div className='testDiv'>%</div>
        </div>
      </div>
      <div className='bigAndSmall'></div>
     
    </div>
  );
};

export default App;
