import React from 'react';
import './Button.css';

const LargeButton = props => {
    const { passedPROPS } = props;
    return (
        <div className='largeButton'>
            <p>
                {/* {passedPROPS.textContent} */}
                
            </p>
        </div>    
    )
}

export default LargeButton;