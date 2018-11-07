import React from 'react';
import OperatorButtons from './OperatorButtons';

const OperatorButtonsContainer = props => {
    const operators = ['divide', 'times', 'minus', 'plus', 'equals'];
    return (
        <div className="operator-container">
            {operators.map(operator => (
                <OperatorButtons buttonStyle="operator-button" text={operator} />
            ))}
        </div>
    );
};

export default OperatorButtonsContainer;
