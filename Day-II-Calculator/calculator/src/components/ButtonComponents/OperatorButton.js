import React from 'react';
import './Button.css';

const operatorNameArray=[
    "divide",
    "multiply",
    "subtract",
    "add",
    "equal"];
const operatorCharArray=[
    "÷","x","-","+","="
];


function OperatorButton(props) {
    let operatorCharacter = "";
    for (let i=0; i < operatorNameArray.length;i++){
        if (props.text === operatorNameArray[i]){
            operatorCharacter = operatorCharArray[i];
        }
    }
    return (
        <button className="operatorButtonClass">{operatorCharacter}</button>
    );
    
}

export default OperatorButton;