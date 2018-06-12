import React from 'react';
import './Display.css';

const Box = (props) => {
    return (
         <button className= {props.background} >{props.number} </button>
    )
};
export default Box;
