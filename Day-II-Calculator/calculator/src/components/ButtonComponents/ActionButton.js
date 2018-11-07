import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div class="act-btn">
            <h1>{props.action}</h1>
        </div>
    );
  }
  
  export default ActionButton;