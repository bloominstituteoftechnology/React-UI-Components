import React from 'react';
import './Display.css';

const LongBox = (props) => {
    return (
         <button className= {props.background} >{props.number} </button>
    )
};
export default LongBox;