import React from 'react';
import './Button.css';



const LargeNumbers = (props) => {
    return (
        <div className='LargeNumberContainer'>
            <p>{props.text}</p>
        </div>
    );
};

export default LargeNumbers;