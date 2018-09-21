import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className='content'>
      <div className = 'topContent'>
        <CalculatorDisplay />
      </div>

      <div className='mainContent'>
        <div className='leftContent'>
          <div className='bigButton'>
            <ActionButton action={'Clear'} buttonStyle={'clear'}/>
          </div>
          <div className='numbersSection'>
            <NumberButton displaySymbol ={1} buttonStyle={'numButton'} />
            <NumberButton displaySymbol ={2} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={3} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={4} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={5} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={6} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={7} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={8} buttonStyle={'numButton'}/>
            <NumberButton displaySymbol ={9} buttonStyle={'numButton'}/>
          </div>
          <div className='bigButton'>
          <ActionButton action={0} buttonStyle={'numButton'}/>
          </div>
        </div>

        <div className='rightContent'>
        <NumberButton displaySymbol ={'division symbol'} buttonStyle={'mathButton'}/>
        <NumberButton displaySymbol ={'X'} buttonStyle={'mathButton'}/>
        <NumberButton displaySymbol ={'-'} buttonStyle={'mathButton'}/>
        <NumberButton displaySymbol ={'+'} buttonStyle={'mathButton'}/>
        <NumberButton displaySymbol ={'='} buttonStyle={'mathButton'}/>
        </div>
      </div>
    </div>
  );
};

export default App;
