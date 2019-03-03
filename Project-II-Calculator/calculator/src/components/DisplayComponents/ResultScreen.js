import React from 'react';
import './Display.css';

const ResultScreen = props => {
    const { displayProps } = props;
    return (
        <div className="result line-container">
            <div className="calculatedResult">
                <p>
                    {displayProps.resultValue}
                </p>
            </div>
        </div>
    )
}

export default ResultScreen;