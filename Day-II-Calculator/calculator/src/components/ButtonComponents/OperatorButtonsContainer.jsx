import React from 'react';
import OperatorButtons from './OperatorButtons';

const operators = ['÷', '✕', '−', '+', '='];

const OperatorButtonsContainer = props => {
    return (
        <>
            {operators.map(operator => (
                <OperatorButtons buttonStyle="operator-button" text={operator} />
            ))}
        </>
    );
};

export default OperatorButtonsContainer;
