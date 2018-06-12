import React from 'react';
import './Button.css';


const MyButton = props => {
    return <button className={props.className}>{props.name}</button>;
     }
 MyButton.defaultProps ={
     name: 'Default name'
 }
 
 export default MyButton;