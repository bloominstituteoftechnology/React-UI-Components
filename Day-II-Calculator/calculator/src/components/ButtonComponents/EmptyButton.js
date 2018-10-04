import React from 'react';
import './Button.css';


const EmptyButton = props =>{

return <button className={props.customClass}>{props.number}</button>
};


export default EmptyButton;
