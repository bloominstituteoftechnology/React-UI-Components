import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
// const App = () => {
//     return ( <
//         div >
//         APP <
//         /div>
//     );
// };

const App = () => {
    return (
        <div className='wrapper'>
            <CalculatorDisplay style="calc-display" text="0" />
            <ActionButton style="clear-button" text="clear" />
            <ActionButton style="function-button" text="&#247;" />
            <NumberButton style="number-button" symbol="7" />
            <NumberButton style="number-button" symbol="8" />
            <NumberButton style="number-button" symbol="9" />
            <ActionButton style="function-button" text="x" />
            <NumberButton style="number-button" symbol="4" />
            <NumberButton style="number-button" symbol="5" />
            <NumberButton style="number-button" symbol="6" />
            <ActionButton style="function-button" text="-" />
            <NumberButton style="number-button" symbol="1" />
            <NumberButton style="number-button" symbol="2" />
            <NumberButton style="number-button" symbol="3" />
            <ActionButton style="function-button" text="+" />
            <NumberButton style="zero-button" symbol="0" />
            <ActionButton style="function-button" text="=" />
        </div>
    );
};

export default App;