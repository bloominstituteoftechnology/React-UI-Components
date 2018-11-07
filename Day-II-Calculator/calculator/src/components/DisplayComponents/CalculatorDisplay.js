import React from 'react';
import './Display.css';
// import ButtonPad from '../ButtonComponents/NumberPad';

function Display(props) {
    return (
        <div className='display'>
            <p>{props.displayContent}</p>
        </div>
    )
}



export default Display;
