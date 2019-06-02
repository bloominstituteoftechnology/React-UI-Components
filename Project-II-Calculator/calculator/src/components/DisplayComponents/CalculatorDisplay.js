import React from 'react';
import './Display.css';

let result = 0;


function Display() {
    return <div className="display">
                <div className="result">{result}</div>
            </div>
}

export default Display;