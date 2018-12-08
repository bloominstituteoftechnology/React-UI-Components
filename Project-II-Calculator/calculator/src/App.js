import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
    return (
        <div className='calculator-container'>
            <CalculatorDisplay />
            <div className='row' id='row-one'>
                <ActionButton name='clear' />
                <NumberButton name='&#247;' extraStyle='red-buttons' />
            </div>
        
        <div className='row' id='row-two'>
            <NumberButton name='7' />
            <NumberButton name='8' />
            <NumberButton name='9' />
            <NumberButton name='x' extraStyle='red-buttons' />
        </div>
        
        <div className='row' id='row-three'>
            <NumberButton name='4' />
            <NumberButton name='5' />
            <NumberButton name='6' />
            <NumberButton name='-' extraStyle='red-buttons' />
        </div>
        
        <div className='row' id='row-four'>
            <NumberButton name='1' />
            <NumberButton name='2' />
            <NumberButton name='3' />
            <NumberButton name='+' extraStyle='red-buttons' />
        </div>
        
        <div className='row' id='row-five'>
            <ActionButton name='0' />
            <NumberButton name='=' extraStyle='red-buttons' />
        </div>
        </div>
)
}

export default App;
