import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import OutPut from './components/DisplayComponents/OutPut';

const App = () => {
  return (
    <div>
      <CalculatorDisplay/>
      
        <div className="numberButtonContainer">
          <div className='numberRows'>
            <NumberButton displayStyle={'numberButton'} text={'9'} />
            <NumberButton displayStyle={'numberButton'} text={'8'} />
            <NumberButton displayStyle={'numberButton'} text={'7'} />
            <NumberButton displayStyle={'redActionButton'} text={<p>&times;</p>} />
          </div>
          <div className='numberRows'>
            <NumberButton displayStyle={'numberButton'} text={'6'} />
            <NumberButton displayStyle={'numberButton'} text={'5'} />
            <NumberButton displayStyle={'numberButton'} text={'4'} />
            <NumberButton displayStyle={'redActionButton'} text={<p>&#8722;</p>} />
          </div>
          <div className='numberRows'>
            <NumberButton displayStyle={'numberButton'} text={'3'} />
            <NumberButton displayStyle={'numberButton'} text={'2'} />
            <NumberButton displayStyle={'numberButton'} text={'1'} />
            <NumberButton displayStyle={'redActionButton'} text={<p>&#43;</p>} />
          </div>
        </div>
        <ActionButton displayStyle={'clear'} text={'Clear'} />
        <ActionButton displayStyle={'zeroButton'} text={'0'} />
        <NumberButton displayStyle={'redEqualsActionButton'} text={<p>&#61;</p>} />
        <NumberButton displayStyle={'redDividActionButton'} text={<p>&divide;</p>} />
        <OutPut displayStyle={'outputText'} output={'0'}/>
      </div>
      
    
  );
};

export default App;
