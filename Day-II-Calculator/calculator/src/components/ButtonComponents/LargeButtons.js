import React from 'react';
import './Button.css';



const LargeButtons = (props) => {
    return (
        <div className='LargeButtonContainer'>
            <p>{props.text}</p>
        </div>
    );
};

export default LargeButtons;