import React from 'react';
import './Button.css';

 const ActionButton = props => {
     return(
         <button className="ActionBtnCss">{props.actionBtn}</button>
     );
 }
 export default ActionButton;