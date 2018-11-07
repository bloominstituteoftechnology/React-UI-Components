import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';

const number = [ 
    7,
    8,
    9,  
    4,
    5,
    6, 
    1,
    2,
    3,
    String.fromCharCode(247),
    "x",
    "-",
    "+",
    "=" 
];

const operators = number.splice(number.length -5, 5);

var buttonArray = [];
for (let i = 0; i < number.length; i++) {
    buttonArray.push({
        buttonStyle: "number",
        text: number[i],
    });
}
var operationsArr = [];
for (let i = 0; i < operators.length; i++) {
    operationsArr.push({
        buttonStyle: "operator",
        text: operators[i],
    })
}
operationsArr[0]['id'] = 'divide';
operationsArr[1]['id'] = 'multiply';
operationsArr[2]['id'] = 'subtract';
operationsArr[3]['id'] = 'add';
operationsArr[4]['id'] = 'equals';
console.log(operationsArr);

const NumberPad = (props) => {
    return (
        <div className='button-container'>
            <div className="numPad">
                <ActionButton class='action' text='clear' onClick={props.click}/>
                {buttonArray.map(item => {
                    return <NumberButton button={item} onClick={props.onClick} />;
                })}
            <ActionButton class='action' text='0' onClick={props.click} />
        </div>
            <div className='operators'>
                {operationsArr.map(item => {
                    return <NumberButton button={item} id={item.id}/>;
                })}
            </div>
        </div>
    );
};


export default NumberPad;