import React from 'react';
import './Display.css';

let result = 0;

function Display() {
    return <div className="display">
                <h1>{result}</h1>;
            </div>
}

export default Display;