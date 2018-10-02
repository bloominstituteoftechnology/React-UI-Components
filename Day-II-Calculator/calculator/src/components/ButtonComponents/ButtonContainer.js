import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import OperatorButton from './OperatorButton';

const numberButton =[
    {
        value:'1'
    },
    {
        value:'2'
    },
    {
        value:'3'
    },
    {
        value:'4'
    },
    {
        value:'5'
    },
    {
        value:'6'
    },
    {
        value:'7'
    },
    {
        value:'8'
    },
    {
        value:'9'
    }
];

const operatorButton =[
    {
        value: '+'
    },
    {
        value: '-'
    },
    {
        value: '×'
    },
    {
        value: '÷'
    },
    {
        value: '='
    }
];
const actionButton =[
    {
        value: '0'
    },
    {
        value: 'clear'
    }
]
function ButtonContainer (){
    return(
        <div className ="button-container">
            <div className ="value-button-container">
                <div className ="action-button-container">
                    <ActionButton buttonOnProps= {actionButton[0]} />
                </div>
                <div className ="number-button-container">
                    {numberButton.map((buttonFromMap)=>{
                    return <NumberButton buttonOnProps={buttonFromMap} />;
                    })}
                </div>
                <div className ="action-button-container">
                    <ActionButton buttonOnProps= {actionButton[1]} />
                </div>
            </div>
            <div className ="operator-button-container">
                {operatorButton.map((buttonFromMap) =>{
                    return <OperatorButton buttonOnProps={buttonFromMap} />
                })}
            </div>
        
        </div>
    );
};

export default ButtonContainer;