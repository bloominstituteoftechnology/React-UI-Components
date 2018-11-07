import React, {Fragment} from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton'
import ActionButton from '../ButtonComponents/ActionButton'


const btntext = [
 {
     text: 7
 },
 {
     text: 4,
 },
 {
     text: 1,
 },

];

function CalculatorDisplay() {
    return(
        <Fragment>
        <ActionButton />
        {btntext.map(btn => <NumberButton btn = {btn} />)}
        </Fragment> 
    )
}


export default CalculatorDisplay;
