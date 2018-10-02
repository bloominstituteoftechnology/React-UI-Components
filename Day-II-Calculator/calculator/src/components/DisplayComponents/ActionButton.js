import React from 'react';
import './Display.css';

function ActionDisplay (props) { // props = { type: "primary"}
let state = 2;

    return (
      <div class = 'action-display'> 
        <h1>{state}</h1>
      </div>
    );
}

export default ActionDisplay;