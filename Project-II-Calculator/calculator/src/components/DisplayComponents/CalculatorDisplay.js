import React from 'react';
import './Display.css';
import NumberButton from '../ButtonComponents/NumberButton';

const numbers = [
    {display:'/'},
    {display:7},
    {display:8},
    {display:9},
    {display:'X'},
    {display:4},
    {display:5},
    {display:6},
    {display:'--'},
    {display:1},
    {display:2},
    {display:3},
    {display:'+'},

];


const CalculatorDisplay = props => {
    return (
        <div className ="calculator">
            <div className="display">0</div>
            <div className="action-button">clear</div>
            
            {numbers.map(number => {
                return (
                    <NumberButton number = {number}/>
                )
            })}
            
            <div className ="action-button">0</div>
            <div className="operator-button">=</div>
        </div>
    )
}

export default CalculatorDisplay; 

