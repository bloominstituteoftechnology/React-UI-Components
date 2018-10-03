import React from 'react';
import './Display.css';

let Display = (props) => {
    return <div className="display">{props.output}</div>;
}

export default Display;