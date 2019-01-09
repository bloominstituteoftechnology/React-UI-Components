import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className='app-container'>    
      <CalculatorDisplay total={0}/>

      <div className='top-content'>
        <div className='wider'>
          <ActionButton display='clear'/>
        </div>
        <div className='narrower action'>
          <ActionButton display='/'/>
        </div>
      </div>

      <div className='buttons'>
 
        <div className='numbers'>
          <div className='line'>
            <NumberButton num='7'/>
            <NumberButton num='8'/>
            <NumberButton num='9'/>
            <div className='action'>
              <ActionButton display='x'/>
            </div>
          </div>
          <div className='line'>
            <NumberButton num='4'/>
            <NumberButton num='5'/>
            <NumberButton num='6'/>
            <div className='action'>
              <ActionButton display='+'/>
            </div>
          </div>
          <div className='line'>
            <NumberButton num='1'/>
            <NumberButton num='2'/>
            <NumberButton num='3'/>
            <div className='action'>
              <ActionButton display='-'/>
            </div>
          </div>
        </div>
      </div>

      <div className='top-content'>
        <div className='wider'>
          <ActionButton display='0'/>
        </div>
        <div className='narrower action'>
          <ActionButton display='='/>
        </div>
      </div>

    </div>
  );
};

export default App;
