import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay = () => {
    return(
        <div className='container'>
            <div className='top-display'>
            
            </div>
            <div className='bottom-display'>
                <ActionButton />
                <NumberButton />
            </div>

        </div>

    );
}

export default CalculatorDisplay;