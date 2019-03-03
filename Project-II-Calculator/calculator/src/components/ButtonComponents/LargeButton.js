import React from 'react';
import './Button.css';

const LargeButton = props => {
    const {buttonTextPROPS } = props;
    return (
        <div className='largeButton'>
            <p>
                {buttonTextPROPS}
            </p>
        </div>    
    )
}

export default LargeButton;