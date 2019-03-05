import React from 'react';
import './Button.css';

const LargeButton = props => {
    const { displayProps } = props;


    const buttonStyle = {
        borderRight: '1px solid black'
    };


    return (
        <div style={buttonStyle} className='largeButton'>
            {displayProps.textContent}
        </div>    
    )
}

export default LargeButton;