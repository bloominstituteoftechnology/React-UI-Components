import React from 'react';
import './Button.css';

const LargeButton = props => {
    const { displayProps } = props;

    return (
        <div className='largeButton'>
            {displayProps.textContent}
        </div>    
    )
}

export default LargeButton;