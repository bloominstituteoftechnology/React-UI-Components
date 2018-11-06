import React, { Fragment } from 'react';
import './Display.css';


function CalculatorDisplay (props) {
    return(
        <Fragment>
            <p className='display'>{props.text}</p>
        </Fragment>
    );
}

export default CalculatorDisplay;

