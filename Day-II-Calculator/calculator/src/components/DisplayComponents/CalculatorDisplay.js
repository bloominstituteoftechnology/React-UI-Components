import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const numbers = [
    {
        position:1
    },{
        position:2
    },{
        position:3
    },{
        position:4
    },{
        position:5
    },{
        position:6
    },{
        position:7
    },{
        position:8
    },{
        position:9
    },{
        position:0
    },
  ];

const actions = [
    {
        position: "clear"
    },{
        position: "÷"
    },{
        position: "x"
    },{
        position: "-"
    },{
        position: "+"
    },{
        position: "="
    },
]

const CalculatorDisplay = props => {
    return (

    <div className="calcContainer">
        <div className='action'>
            {actions.map(action=> {
                return (
                    <ActionButton action={action} />
                )
            })}
        </div>
        <div className="number">
        {numbers.map(number=> {
            return (
                <NumberButton number={number} />
            )
        })}
        </div>
    </div>
    );
}

export default CalculatorDisplay;