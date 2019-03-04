import React from 'react';
import './Display.css';

const ResultScreen = props => {
    const { displayProps } = props;
    // console.log(props)
    return (
        <div className="result line-container">
            {displayProps.resultValue}
        </div>
    )
}

export default ResultScreen;