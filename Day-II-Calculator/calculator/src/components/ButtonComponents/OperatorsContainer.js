import React  from 'react';
import OperatorButton from './OperatorButton';
import './OperatorsButtons.css';

const buttons = [
    {operator: '÷'},
    {operator: 'x'}, 
    {operator: '-'}, 
    {operator: '+'}, 
    {operator: '='}, 
]


function OperatorsContainer(){
    const buttonsDiplay = buttons.map(button => <OperatorButton text={button.operator} style="button button-red"/>);

    return (
        <div className="buttons-container-sm">
            <div className="buttons-wrapper-sm">
              {buttonsDiplay}
            </div>
        </div>
    );
}

export default OperatorsContainer;